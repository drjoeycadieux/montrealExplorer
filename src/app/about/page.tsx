import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'mount-royal') || PlaceHolderImages[2];
  return (
    <div>
      <section className="relative h-[400px]">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="font-headline text-5xl font-bold text-white md:text-7xl">
            About Us
          </h1>
        </div>
      </section>
      <section className="container py-16">
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-4xl text-foreground/80">
          <h2 className="font-headline text-primary">Our Mission</h2>
          <p>
            Welcome to Montreal Explorer, your ultimate guide to discovering the vibrant heart of Canada's cultural capital. Our mission is to share the stories, flavors, and secrets that make Montréal a one-of-a-kind city. We are passionate locals dedicated to providing you with authentic, curated content that goes beyond the typical tourist trails.
          </p>
          <p>
            Whether you're a first-time visitor or a lifelong resident, we want to help you experience the city's unique blend of European charm and North American energy. From the historic cobblestone streets of Old Montréal to the trendy boutiques of The Plateau, we're here to guide your adventure.
          </p>
          <h2 className="font-headline text-primary">What We Do</h2>
          <p>
            We explore every corner of the city to bring you in-depth articles, neighborhood guides, and culinary reviews. Our content covers everything from iconic landmarks and world-class museums to hidden gems and local favorites. We believe the best way to know a city is through its food, its art, and its people.
          </p>
          <ul>
            <li><strong>In-Depth Guides:</strong> Detailed articles on districts, landmarks, and cultural events.</li>
            <li><strong>Food & Drink:</strong> Reviews of the best poutine, smoked meat, bagels, and more.</li>
            <li><strong>Local Tips:</strong> Insider advice to help you explore like a true Montrealer.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
