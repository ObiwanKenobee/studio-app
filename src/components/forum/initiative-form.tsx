'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { Loader2 } from 'lucide-react';

const FormSchema = z.object({
  initiativeName: z.string().min(5, 'Name must be at least 5 characters.'),
  location: z.string().min(2, 'Location is required.'),
  description: z.string().min(20, 'Please provide a more detailed description.'),
  website: z.string().url('Please enter a valid URL.').optional().or(z.literal('')),
});

export default function InitiativeForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      initiativeName: '',
      location: '',
      description: '',
      website: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    console.log('Submitting initiative:', data);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Initiative Submitted!",
        description: "Thank you for sharing your regenerative work with the community.",
      });
      form.reset();
      setIsLoading(false);
    }, 1500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="initiativeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Initiative Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Community Food Forest Project" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location (City, Country)</FormLabel>
              <FormControl>
                <Input placeholder="e.g., Nairobi, Kenya" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your project, its goals, and its impact..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Upload Initiative
        </Button>
      </form>
    </Form>
  );
}
