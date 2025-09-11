import { getSubmissionById } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Github, Eye, ThumbsUp, Download, Share2 } from 'lucide-react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SubmissionEvaluation from '@/components/submission-evaluation';
import ModelViewer from '@/components/model-viewer';
import TaglineGenerator from '@/components/tagline-generator';

export default async function SubmissionPage({ params }: { params: { id: string } }) {
  const submission = await getSubmissionById(params.id);

  if (!submission) {
    notFound();
  }

  const CategoryIcon = Icons[submission.category.id];
  const has3dModel = submission.media.model3d && (submission.category.id === 'robotics' || submission.category.id === 'weirdest-hardware');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <header className="mb-6">
            <div className="flex items-center gap-3 mb-2 text-muted-foreground">
              {CategoryIcon && <CategoryIcon className="w-6 h-6" />}
              <span className="font-semibold text-primary">{submission.category.name}</span>
            </div>
            <h1 className="text-4xl font-bold font-headline tracking-tight">
              {submission.title}
            </h1>
            <TaglineGenerator description={submission.description} />
            <p className="text-lg text-muted-foreground mt-2">
              by {submission.author.name} {submission.author.organization && `(${submission.author.organization})`}
            </p>
          </header>

          {has3dModel ? (
            <div>
              <h2 className="text-2xl font-bold font-headline mb-4">3D & AR Model</h2>
              <ModelViewer src={submission.media.model3d!} alt={`${submission.title} 3D Model`} />
            </div>
          ) : (
            submission.media.demoVideo && (
              <div className="aspect-video w-full overflow-hidden rounded-lg border mb-6">
                  <iframe
                      className="w-full h-full"
                      src={submission.media.demoVideo.replace('watch?v=', 'embed/')}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
              </div>
            )
          )}

          <div className="prose dark:prose-invert max-w-none my-8">
            <p>{submission.description}</p>
          </div>
          
          <h2 className="text-2xl font-bold font-headline mb-4">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {submission.media.screenshots.map((src, index) => (
              <div key={index} className="relative aspect-video w-full overflow-hidden rounded-lg border">
                <Image src={src} alt={`${submission.title} screenshot ${index + 1}`} fill className="object-cover"/>
              </div>
            ))}
          </div>

        </div>

        <aside className="lg:col-span-1 space-y-6">
          <SubmissionEvaluation submission={submission} />

          <Card>
            <CardHeader>
              <CardTitle>Project Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button asChild className="w-full justify-start" variant="outline">
                <Link href={submission.media.codeRepository} target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  Code Repository
                </Link>
              </Button>
              {submission.media.documentation &&
                <Button asChild className="w-full justify-start" variant="outline">
                  <Link href={submission.media.documentation} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Documentation
                  </Link>
                </Button>
              }
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Details</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3">
              <div><strong>Model Used:</strong> {submission.technical.modelUsed} ({submission.technical.modelSize})</div>
              <div><strong>Framework:</strong> {submission.technical.framework}</div>
              <div><strong>Languages:</strong> {submission.technical.programmingLanguages.join(', ')}</div>
              <div><strong>Hardware:</strong> {submission.technical.hardwareRequirements}</div>
              <div><strong>Specializations:</strong> 
                <div className="flex flex-wrap gap-2 mt-2">
                  {submission.technical.specializations.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {submission.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Metrics</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Eye className="w-5 h-5 text-muted-foreground"/> <span>{submission.metrics.views.toLocaleString()} Views</span></div>
                <div className="flex items-center gap-2"><ThumbsUp className="w-5 h-5 text-muted-foreground"/> <span>{submission.metrics.likes.toLocaleString()} Likes</span></div>
                <div className="flex items-center gap-2"><Download className="w-5 h-5 text-muted-foreground"/> <span>{submission.metrics.downloads.toLocaleString()} Downloads</span></div>
                <div className="flex items-center gap-2"><Share2 className="w-5 h-5 text-muted-foreground"/> <span>{submission.metrics.shares.toLocaleString()} Shares</span></div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
