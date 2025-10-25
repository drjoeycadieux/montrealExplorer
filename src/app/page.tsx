
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'old-port') || PlaceHolderImages[0];

  return (
    <div className="relative h-[calc(100vh-10rem)] w-full overflow-hidden">
      <Image
        src={heroImage.imageUrl}
        alt={heroImage.description}
        fill
        className="object-cover"
        data-ai-hint={heroImage.imageHint}
        priority
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
          Welcome to Montréal
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl">
          Your journey into Canada's cultural capital starts here.
        </p>
        <Button size="lg" className="mt-8" asChild>
          <Link href="/districts">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
