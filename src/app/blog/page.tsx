import { getBlogPosts, type BlogPost } from '@/lib/blog-posts';
import { BlogPostCard } from '@/components/blog-post-card';

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Montréal Stories
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Discover the latest articles and insights from the heart of the city.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground">
          <p>No blog posts found. Please check back later.</p>
        </div>
      )}
    </div>
  );
}
