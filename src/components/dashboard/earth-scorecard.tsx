'use client';

import { useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, LabelList } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { getWisdomCloudRecommendations } from '@/app/actions';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const initialScorecardData = {
  ecologicalHarmonyScore: 68,
  bioculturalSovereigntyScore: 75,
  youthHopeScore: 55,
  aiEthicsComplianceScore: 82,
};

const chartData = [
  { name: 'Ecological Harmony', score: initialScorecardData.ecologicalHarmonyScore, fill: "hsl(var(--chart-1))" },
  { name: 'Biocultural Sovereignty', score: initialScorecardData.bioculturalSovereigntyScore, fill: "hsl(var(--chart-2))" },
  { name: 'Youth Hope', score: initialScorecardData.youthHopeScore, fill: "hsl(var(--chart-3))" },
  { name: 'AI Ethics Compliance', score: initialScorecardData.aiEthicsComplianceScore, fill: "hsl(var(--chart-4))" },
];

const chartConfig = {
  score: {
    label: "Score",
  },
  'Ecological Harmony': {
    label: "Ecological Harmony",
    color: "hsl(var(--chart-1))",
  },
  'Biocultural Sovereignty': {
    label: "Biocultural Sovereignty",
    color: "hsl(var(--chart-2))",
  },
  'Youth Hope': {
    label: "Youth Hope",
    color: "hsl(var(--chart-3))",
  },
  'AI Ethics Compliance': {
    label: "AI Ethics Compliance",
    color: "hsl(var(--chart-4))",
  },
}

export default function EarthScorecard() {
  const [recommendations, setRecommendations] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations([]);

    const result = await getWisdomCloudRecommendations(initialScorecardData);

    if (result.success && result.data) {
      setRecommendations(result.data.recommendations);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-5">
      <div className="lg:col-span-3">
        <Card className="h-full">
          <CardHeader>
            <CardTitle className="font-headline">Planetary Health Indexes</CardTitle>
            <CardDescription>Current scores out of 100</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="w-full" style={{ height: '400px' }}>
                <BarChart accessibilityLayer data={chartData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid horizontal={false} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: 'hsl(var(--foreground))', fontSize: 14 }}
                    width={150}
                  />
                  <XAxis dataKey="score" type="number" hide />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
                  <Bar dataKey="score" layout="vertical" radius={5}>
                    <LabelList dataKey="score" position="right" offset={8} className="fill-foreground font-semibold" fontSize={14} />
                  </Bar>
                </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card className="h-full bg-secondary/30">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" />
              <CardTitle className="font-headline">Wisdom Cloud</CardTitle>
            </div>
            <CardDescription>AI-powered recommendations to improve our planetary scores.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleGetRecommendations} disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Generating Insights...
                </>
              ) : (
                'Get Recommendations'
              )}
            </Button>
            <div className="mt-6 space-y-4">
              {error && (
                <div className="text-destructive flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  <p>{error}</p>
                </div>
              )}
              {recommendations.length > 0 && (
                <ul className="space-y-3 list-disc list-inside text-sm text-muted-foreground">
                  {recommendations.map((rec, index) => (
                    <li key={index}><span className="text-foreground">{rec}</span></li>
                  ))}
                </ul>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
