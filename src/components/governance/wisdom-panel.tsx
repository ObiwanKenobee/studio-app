'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { getWisdomPanelSummary } from '@/app/actions';
import { Loader2, Sparkles, AlertTriangle } from 'lucide-react';
import { Separator } from '../ui/separator';

const FormSchema = z.object({
  proposalText: z.string().min(50, {
    message: 'Proposal text must be at least 50 characters.',
  }),
});

export default function WisdomPanel() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      proposalText: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setError(null);
    setSummary(null);
    
    const result = await getWisdomPanelSummary(data);

    if (result.success && result.data) {
      setSummary(result.data.summary);
    } else {
      setError(result.error || 'An unknown error occurred.');
    }
    setIsLoading(false);
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="font-headline flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-accent" />
            AI Wisdom Panel
        </CardTitle>
        <CardDescription>Paste a regenerative proposal below to receive an impartial summary of its potential pros and cons.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="proposalText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Regenerative Proposal Text</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter the full text of the proposal here..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing Proposal...
                </>
              ) : (
                'Generate Summary'
              )}
            </Button>
          </form>
        </Form>
        
        {(isLoading || error || summary) && <Separator className="my-6" />}

        {isLoading && (
            <div className="flex justify-center items-center flex-col text-muted-foreground">
                <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
                <p>The Wisdom Panel is convening...</p>
            </div>
        )}

        {error && (
            <div className="text-destructive flex items-center gap-2 p-4 bg-destructive/10 rounded-md">
                <AlertTriangle className="h-4 w-4" />
                <p>{error}</p>
            </div>
        )}

        {summary && (
            <div>
                <h3 className="font-headline text-xl font-semibold mb-4">Summary of Pros & Cons</h3>
                <div className="prose prose-sm max-w-none text-foreground whitespace-pre-wrap">
                    <p>{summary}</p>
                </div>
            </div>
        )}
      </CardContent>
    </Card>
  );
}
