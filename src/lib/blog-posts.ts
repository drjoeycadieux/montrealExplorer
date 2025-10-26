import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string; // was body
  image: ImagePlaceholder;
  excerpt: string; // was description
}

const API_BASE_URL = 'https://montrealexplorer-api.onrender.com/api/blog';

// The API returns posts with 'content' and 'excerpt'
// The existing app uses 'body' and 'description'
// This function adapts the API response to the app's data structure
function adaptPost(apiPost: any): BlogPost {
  const defaultImage = PlaceHolderImages.find(img => img.id === 'murals') || PlaceHolderImages[5] || {
    id: 'default-blog-image',
    imageUrl: 'https://picsum.photos/seed/montreal-blog/600/400',
    description: 'A vibrant scene from Montreal.',
    imageHint: 'montreal street'
  };

  return {
    _id: apiPost._id,
    title: apiPost.title,
    slug: apiPost.slug,
    content: apiPost.content,
    excerpt: apiPost.excerpt,
    image: {
      id: apiPost.slug,
      imageUrl: apiPost.imageUrl || defaultImage.imageUrl,
      description: apiPost.title,
      imageHint: 'montreal blog'
    },
  };
}


export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(API_BASE_URL);
    if (!res.ok) {
      console.error('Failed to fetch blog posts:', res.statusText);
      return [];
    }
    const posts = await res.json();
    return posts.map(adaptPost);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/${slug}`);
    if (!res.ok) {
      console.error(`Failed to fetch blog post with slug ${slug}:`, res.statusText);
      return undefined;
    }
    const post = await res.json();
    return adaptPost(post);
  } catch (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return undefined;
  }
}
