
import { getBlogPostBySlug } from '@/lib/blog-posts';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import React from 'react';

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Button asChild variant="link" className="p-0 h-auto mb-4">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to all posts
          </Link>
        </Button>
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <div className="mt-8 overflow-hidden rounded-lg">
          <Image
            src={post.image.imageUrl}
            alt={post.image.description}
            width={1200}
            height={675}
            className="object-cover w-full"
            data-ai-hint={post.image.imageHint}
          />
        </div>
        <div
          className="prose prose-lg dark:prose-invert mt-8 max-w-none text-foreground/80"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
