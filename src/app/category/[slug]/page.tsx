import { Suspense } from 'react';
import { getSubmissions, categories } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { SubmissionCard } from '@/components/submission-card';
import Filters from '@/components/filters';

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }));
}

export default async function CategoryPage({ 
  params,
  searchParams,
}: { 
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const category = categories.find(c => c.id === params.slug);
  if (!category) {
    notFound();
  }
  
  const sortBy = typeof searchParams?.sortBy === 'string' ? searchParams.sortBy : 'newest';
  const query = typeof searchParams?.q === 'string' ? searchParams.q : '';

  let submissions = (await getSubmissions()).filter(s => s.category.id === params.slug);
  
  if (query) {
    submissions = submissions.filter(
      (s) =>
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.description.toLowerCase().includes(query.toLowerCase()) ||
        s.author.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  submissions.sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return (b.metrics.views + b.metrics.likes) - (a.metrics.views + a.metrics.likes);
      case 'newest':
      default:
        return b.timestamps.submitted.getTime() - a.timestamps.submitted.getTime();
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
          Category: {category.name}
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Explore submissions for the "{category.name}" category.
        </p>
      </header>

      <Suspense fallback={<div>Loading filters...</div>}>
        <Filters />
      </Suspense>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {submissions.map((submission) => (
          <SubmissionCard key={submission.id} submission={submission} />
        ))}
      </div>
      {submissions.length === 0 && (
        <div className="col-span-full text-center py-16">
            <h2 className="text-2xl font-semibold">No submissions found</h2>
            <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}
