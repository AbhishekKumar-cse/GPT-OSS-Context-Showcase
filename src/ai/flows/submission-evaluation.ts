'use server';
/**
 * @fileOverview An AI flow for evaluating contest submissions.
 *
 * - evaluateSubmission - A function that provides a review and scoring for a submission.
 * - EvaluateSubmissionInput - The input type for the evaluateSubmission function.
 * - EvaluateSubmissionOutput - The return type for the evaluateSubmission function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EvaluateSubmissionInputSchema = z.object({
  title: z.string().describe('The title of the submission.'),
  description: z.string().describe('The detailed description of the submission.'),
  category: z.string().describe('The category of the submission.'),
  technicalDetails: z.object({
    modelUsed: z.string(),
    framework: z.string(),
    programmingLanguages: z.array(z.string()),
    hardwareRequirements: z.string(),
    specializations: z.array(z.string()),
  }).describe('The technical details of the project.'),
});
export type EvaluateSubmissionInput = z.infer<typeof EvaluateSubmissionInputSchema>;

const EvaluateSubmissionOutputSchema = z.object({
  creativityScore: z.number().min(1).max(10).describe('Score from 1 to 10 for creativity and originality.'),
  technicalComplexityScore: z.number().min(1).max(10).describe('Score from 1 to 10 for technical complexity and execution.'),
  impactScore: z.number().min(1).max(10).describe('Score from 1 to 10 for potential impact and usefulness.'),
  feedback: z.string().describe('Constructive feedback and detailed suggestions for improvement.'),
});
export type EvaluateSubmissionOutput = z.infer<typeof EvaluateSubmissionOutputSchema>;

export async function evaluateSubmission(input: EvaluateSubmissionInput): Promise<EvaluateSubmissionOutput> {
  return evaluateSubmissionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'evaluateSubmissionPrompt',
  input: {schema: EvaluateSubmissionInputSchema},
  output: {schema: EvaluateSubmissionOutputSchema},
  prompt: `You are an expert judge for a technology contest. Evaluate the following submission based on the provided details. Provide scores for creativity, technical complexity, and potential impact on a scale of 1 to 10. Also, provide actionable feedback for improvement.

Submission Details:
- Title: {{{title}}}
- Category: {{{category}}}
- Description: {{{description}}}
- Technical Details:
  - Model Used: {{{technicalDetails.modelUsed}}}
  - Framework: {{{technicalDetails.framework}}}
  - Programming Languages: {{#each technicalDetails.programmingLanguages}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}
  - Hardware Requirements: {{{technicalDetails.hardwareRequirements}}}
  - Specializations: {{#each technicalDetails.specializations}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

Evaluation Criteria:
- Creativity: How original and innovative is the idea?
- Technical Complexity: How difficult was this to build? Does it use advanced techniques?
- Impact: How useful or impactful could this project be? Does it solve a real problem?

Provide your evaluation in the specified JSON format. The feedback should be constructive and offer specific suggestions.`,
});

const evaluateSubmissionFlow = ai.defineFlow(
  {
    name: 'evaluateSubmissionFlow',
    inputSchema: EvaluateSubmissionInputSchema,
    outputSchema: EvaluateSubmissionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
