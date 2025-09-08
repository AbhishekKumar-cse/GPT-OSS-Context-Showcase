'use server';

/**
 * @fileOverview A flow for automatically generating tags for new submissions based on their content.
 *
 * - generateTags - A function that generates tags for a given submission's content.
 * - GenerateTagsInput - The input type for the generateTags function, containing the submission content.
 * - GenerateTagsOutput - The return type for the generateTags function, containing the generated tags.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTagsInputSchema = z.object({
  submissionContent: z
    .string()
    .describe('The content of the submission, including title and description.'),
});
export type GenerateTagsInput = z.infer<typeof GenerateTagsInputSchema>;

const GenerateTagsOutputSchema = z.object({
  tags: z
    .array(z.string())
    .describe('An array of tags generated for the submission.'),
});
export type GenerateTagsOutput = z.infer<typeof GenerateTagsOutputSchema>;

export async function generateTags(input: GenerateTagsInput): Promise<GenerateTagsOutput> {
  return generateTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTagsPrompt',
  input: {schema: GenerateTagsInputSchema},
  output: {schema: GenerateTagsOutputSchema},
  prompt: `You are an expert in content categorization. Based on the following submission content, generate a list of relevant tags.

Submission Content: {{{submissionContent}}}

Tags (comma-separated):`,
});

const generateTagsFlow = ai.defineFlow(
  {
    name: 'generateTagsFlow',
    inputSchema: GenerateTagsInputSchema,
    outputSchema: GenerateTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    // Splitting the comma-separated tags into an array
    const tags = output!.tags;
    return {tags};
  }
);
