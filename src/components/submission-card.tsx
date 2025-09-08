import Link from 'next/link';
import Image from 'next/image';
import type { Submission } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, ThumbsUp } from 'lucide-react';
import { Icons } from './icons';

interface SubmissionCardProps {
  submission: Submission;
}

export function SubmissionCard({ submission }: SubmissionCardProps) {
  const CategoryIcon = Icons[submission.category.id];

  return (
    <Link href={`/submissions/${submission.id}`} className="block group">
      <Card className="h-full flex flex-col transition-all duration-200 ease-in-out group-hover:shadow-lg group-hover:-translate-y-1">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden rounded-t-lg">
            <Image
              src={submission.media.screenshots[0]}
              alt={submission.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={`${submission.category.id} ${submission.tags[0]}`}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <div className="flex items-center gap-2 mb-2">
            {CategoryIcon && <CategoryIcon className="w-5 h-5 text-muted-foreground" />}
            <Badge variant="secondary">{submission.category.name}</Badge>
          </div>
          <h3 className="font-semibold font-headline leading-snug tracking-tight">
            {submission.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            by {submission.author.name}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <ThumbsUp className="w-4 h-4" />
              {submission.metrics.likes}
            </span>
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4" />
              {submission.metrics.views}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
