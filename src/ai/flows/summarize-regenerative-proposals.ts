'use server';
/**
 * @fileOverview Summarizes the pros and cons of regenerative proposals using an AI Wisdom Panel.
 *
 * - summarizeRegenerativeProposals - A function that summarizes the pros and cons of regenerative proposals.
 * - SummarizeProposalsInput - The input type for the summarizeRegenerativeProposals function.
 * - SummarizeProposalsOutput - The return type for the summarizeRegenerativeProposals function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeProposalsInputSchema = z.object({
  proposalText: z.string().describe('The text of the regenerative proposal.'),
});
export type SummarizeProposalsInput = z.infer<typeof SummarizeProposalsInputSchema>;

const SummarizeProposalsOutputSchema = z.object({
  summary: z.string().describe('A summary of the pros and cons of the regenerative proposal.'),
});
export type SummarizeProposalsOutput = z.infer<typeof SummarizeProposalsOutputSchema>;

export async function summarizeRegenerativeProposals(input: SummarizeProposalsInput): Promise<SummarizeProposalsOutput> {
  return summarizeRegenerativeProposalsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeRegenerativeProposalsPrompt',
  input: {schema: SummarizeProposalsInputSchema},
  output: {schema: SummarizeProposalsOutputSchema},
  prompt: `You are an AI Wisdom Panel that summarizes the pros and cons of regenerative proposals for a Planetary DAO.

  Summarize the following proposal, highlighting the key arguments for and against it.

  Proposal: {{{proposalText}}}`,
});

const summarizeRegenerativeProposalsFlow = ai.defineFlow(
  {
    name: 'summarizeRegenerativeProposalsFlow',
    inputSchema: SummarizeProposalsInputSchema,
    outputSchema: SummarizeProposalsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
