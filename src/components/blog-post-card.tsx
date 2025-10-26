import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BlogPost } from '@/lib/blog-posts';


export function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="group flex flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} aria-label={post.title}>
        <div className="overflow-hidden">
          <Image
            src={post.image.imageUrl}
            alt={post.image.description}
            width={600}
            height={400}
            className="object-cover w-full h-48 transition-transform duration-300 ease-in-out group-hover:scale-105"
            data-ai-hint={post.image.imageHint}
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
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter>
      </CardFooter>
    </Card>
  );
}
