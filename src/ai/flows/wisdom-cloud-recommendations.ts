// src/ai/flows/wisdom-cloud-recommendations.ts
'use server';

/**
 * @fileOverview Provides AI-powered recommendations for improving Earth Scorecard metrics.
 *
 * - wisdomCloudRecommendations - A function that generates recommendations based on Earth Scorecard data.
 * - WisdomCloudRecommendationsInput - The input type for the wisdomCloudRecommendations function.
 * - WisdomCloudRecommendationsOutput - The return type for the wisdomCloudRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WisdomCloudRecommendationsInputSchema = z.object({
  ecologicalHarmonyScore: z.number().describe('The ecological harmony score.'),
  bioculturalSovereigntyScore: z.number().describe('The biocultural sovereignty score.'),
  youthHopeScore: z.number().describe('The youth hope score.'),
  aiEthicsComplianceScore: z.number().describe('The AI ethics compliance score.'),
});

export type WisdomCloudRecommendationsInput = z.infer<typeof WisdomCloudRecommendationsInputSchema>;

const WisdomCloudRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.string().describe('A recommendation for improving the Earth Scorecard metrics.')
  ).describe('A list of recommendations for improving the Earth Scorecard metrics.'),
});

export type WisdomCloudRecommendationsOutput = z.infer<typeof WisdomCloudRecommendationsOutputSchema>;

export async function wisdomCloudRecommendations(input: WisdomCloudRecommendationsInput): Promise<WisdomCloudRecommendationsOutput> {
  return wisdomCloudRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'wisdomCloudRecommendationsPrompt',
  input: {schema: WisdomCloudRecommendationsInputSchema},
  output: {schema: WisdomCloudRecommendationsOutputSchema},
  prompt: `You are an AI assistant providing recommendations for improving Earth Scorecard metrics.

  Based on the provided scores, generate a list of actionable recommendations.

  Ecological Harmony Score: {{{ecologicalHarmonyScore}}}
  Biocultural Sovereignty Score: {{{bioculturalSovereigntyScore}}}
  Youth Hope Score: {{{youthHopeScore}}}
  AI Ethics Compliance Score: {{{aiEthicsComplianceScore}}}

  Provide concise and practical recommendations that users can implement to improve these scores.
  Format the output as a JSON array of strings.
  `,
});

const wisdomCloudRecommendationsFlow = ai.defineFlow(
  {
    name: 'wisdomCloudRecommendationsFlow',
    inputSchema: WisdomCloudRecommendationsInputSchema,
    outputSchema: WisdomCloudRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
