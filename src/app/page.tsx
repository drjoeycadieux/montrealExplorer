
import { blogPosts } from '@/lib/blog-posts';
import { BlogPostCard } from '@/components/blog-post-card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const displayPosts = blogPosts.map((post) => ({
    title: post.title,
    slug: post.slug,
    imageUrl: post.image.imageUrl,
    description: post.image.description,
    imageHint: post.image.imageHint
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-card">
        <div className="container text-center">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-6xl lg:text-7xl">
            Explore the Heart of Montréal
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 md:text-xl">
            From cobblestone streets to vibrant festivals, discover the stories, flavors, and secrets of Canada's cultural capital.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <Link href="/districts">
                Start Exploring
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/">
                Latest Posts
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 sm:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Dive into our hand-picked stories from the streets of Montréal.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
