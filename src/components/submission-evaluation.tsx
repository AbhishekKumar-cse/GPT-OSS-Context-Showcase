'use client';

import { useState } from 'react';
import { Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';
import { evaluateSubmission, EvaluateSubmissionOutput } from '@/ai/flows/submission-evaluation';
import type { Submission } from '@/lib/types';

interface SubmissionEvaluationProps {
  submission: Submission;
}

export default function SubmissionEvaluation({ submission }: SubmissionEvaluationProps) {
  const [evaluation, setEvaluation] = useState<EvaluateSubmissionOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEvaluate = async () => {
    setIsLoading(true);
    setEvaluation(null);
    try {
      const result = await evaluateSubmission({
        title: submission.title,
        description: submission.description,
        category: submission.category.name,
        technicalDetails: {
          modelUsed: submission.technical.modelUsed,
          framework: submission.technical.framework,
          programmingLanguages: submission.technical.programmingLanguages,
          hardwareRequirements: submission.technical.hardwareRequirements,
          specializations: submission.technical.specializations,
        },
      });
      setEvaluation(result);
    } catch (error) {
      console.error('Evaluation failed:', error);
      toast({
        title: 'Evaluation Error',
        description: 'There was an error evaluating the submission. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const ScoreBar = ({ label, score }: { label: string; score: number }) => (
    <div>
      <div className="mb-1 flex justify-between items-baseline">
        <span className="text-sm font-medium">{label}</span>
        <span className="text-sm font-bold text-primary">{score} / 10</span>
      </div>
      <Progress value={score * 10} className="h-2" />
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Evaluation</CardTitle>
        <CardDescription>
          Get an automated review of this submission.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button
          onClick={handleEvaluate}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            'Evaluating...'
          ) : (
            <>
              <Wand2 className="mr-2 h-4 w-4" />
              Evaluate with AI
            </>
          )}
        </Button>

        {evaluation && (
          <div className="mt-6 space-y-4">
            <h4 className="font-semibold">Evaluation Results:</h4>
            <div className="space-y-3">
              <ScoreBar label="Creativity" score={evaluation.creativityScore} />
              <ScoreBar label="Technical Complexity" score={evaluation.technicalComplexityScore} />
              <ScoreBar label="Potential Impact" score={evaluation.impactScore} />
            </div>
            <div>
              <h5 className="font-semibold mb-2">Feedback & Suggestions:</h5>
              <p className="text-sm text-muted-foreground bg-secondary/50 p-3 rounded-md">
                {evaluation.feedback}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
