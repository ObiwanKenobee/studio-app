"use server";

import { summarizeRegenerativeProposals, SummarizeProposalsInput } from "@/ai/flows/summarize-regenerative-proposals";
import { wisdomCloudRecommendations, WisdomCloudRecommendationsInput } from "@/ai/flows/wisdom-cloud-recommendations";

export async function getWisdomPanelSummary(input: SummarizeProposalsInput) {
    try {
        const result = await summarizeRegenerativeProposals(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Failed to get summary from AI Wisdom Panel." };
    }
}

export async function getWisdomCloudRecommendations(input: WisdomCloudRecommendationsInput) {
    try {
        const result = await wisdomCloudRecommendations(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        return { success: false, error: "Failed to get recommendations from Wisdom Cloud." };
    }
}
