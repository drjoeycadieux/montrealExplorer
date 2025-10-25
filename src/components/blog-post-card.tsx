import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface BlogPostCardProps {
  post: {
    title: string;
    slug: string;
    description: string;
    imageUrl: string;
    imageHint: string;
  };
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} aria-label={post.title}>
        <div className="overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.description}
            width={600}
            height={400}
            className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={post.imageHint}
          />
        </div>
      </Link>
      <CardHeader>
        <CardTitle className="font-headline text-xl leading-tight">
          <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">
          {post.description}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-accent-foreground">
          <Link href={`/blog/${post.slug}`}>
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
