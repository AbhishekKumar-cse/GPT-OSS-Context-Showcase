// src/ai/flows/semantic-search-enhancement.ts
'use server';

/**
 * @fileOverview Implements semantic search enhancement using GPT-OSS models.
 *
 * - semanticSearch: A function that performs semantic search on submissions.
 * - SemanticSearchInput: The input type for the semanticSearch function.
 * - SemanticSearchOutput: The return type for the semanticSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SemanticSearchInputSchema = z.object({
  query: z.string().describe('The semantic search query.'),
});
export type SemanticSearchInput = z.infer<typeof SemanticSearchInputSchema>;

const SemanticSearchOutputSchema = z.object({
  results: z.array(z.string()).describe('A list of submission IDs that match the semantic search query.'),
});
export type SemanticSearchOutput = z.infer<typeof SemanticSearchOutputSchema>;

export async function semanticSearch(input: SemanticSearchInput): Promise<SemanticSearchOutput> {
  return semanticSearchFlow(input);
}

const semanticSearchPrompt = ai.definePrompt({
  name: 'semanticSearchPrompt',
  input: {schema: SemanticSearchInputSchema},
  output: {schema: SemanticSearchOutputSchema},
  prompt: `You are a search assistant that performs semantic searches on a list of GPT-OSS submissions.

The user will provide a search query, and you should return a list of submission IDs that are relevant to the query.

Query: {{{query}}}

Return ONLY a JSON array of submission IDs. Do not include any other text.`,
});

const semanticSearchFlow = ai.defineFlow(
  {
    name: 'semanticSearchFlow',
    inputSchema: SemanticSearchInputSchema,
    outputSchema: SemanticSearchOutputSchema,
  },
  async input => {
    const {output} = await semanticSearchPrompt(input);
    return output!;
  }
);
