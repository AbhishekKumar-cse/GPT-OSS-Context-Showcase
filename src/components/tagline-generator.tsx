'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { generateTagline } from '@/ai/flows/generate-tagline';

interface TaglineGeneratorProps {
  description: string;
}

export default function TaglineGenerator({ description }: TaglineGeneratorProps) {
  const [tagline, setTagline] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setTagline(null);
    try {
      const result = await generateTagline({
        projectDescription: description,
      });
      setTagline(result.tagline);
    } catch (error) {
      console.error('Tagline generation failed:', error);
      toast({
        title: 'Tagline Generation Error',
        description: 'There was an error generating a tagline. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-4 flex items-center gap-4">
        <Button
            onClick={handleGenerate}
            disabled={isLoading}
            variant="outline"
            size="sm"
        >
            {isLoading ? (
                'Generating...'
            ) : (
                <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Tagline
                </>
            )}
        </Button>
        {tagline && (
            <p className="text-lg font-semibold text-accent italic">"{tagline}"</p>
        )}
    </div>
  );
}
