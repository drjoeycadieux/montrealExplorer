import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { UtensilsCrossed } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CuisinePage() {
  const poutineImage = PlaceHolderImages.find(img => img.id === 'poutine');
  const jeanTalonImage = PlaceHolderImages.find(img => img.id === 'jean-talon');
  
  const culinaryDelights = [
    { 
      name: 'Poutine', 
      description: 'The iconic dish of fries, cheese curds, and gravy. A must-try indulgence.',
      image: poutineImage || PlaceHolderImages[3] 
    },
    { 
      name: 'Montréal Smoked Meat', 
      description: 'A deli classic, piled high on rye bread with mustard. A true taste of the city.',
      image: {
        imageUrl: "https://picsum.photos/seed/smokedmeat/600/400",
        description: "A close-up of a Montreal smoked meat sandwich.",
        imageHint: "smoked meat sandwich"
      }
    },
    { 
      name: 'Bagels', 
      description: 'Sweeter and denser than their New York counterparts, baked in wood-fired ovens.',
       image: {
        imageUrl: "https://picsum.photos/seed/bagels/600/400",
        description: "A stack of freshly baked Montreal-style bagels.",
        imageHint: "montreal bagels"
      }
    },
    { 
      name: 'Jean-Talon Market', 
      description: 'A food lover\'s paradise with fresh produce, local cheeses, and artisanal goods.',
      image: jeanTalonImage || PlaceHolderImages[4] 
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          A Taste of Montréal
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          From iconic dishes to bustling markets, explore the flavors that define the city.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {culinaryDelights.map((delight) => (
          <Card key={delight.name} className="overflow-hidden">
            <div className="relative h-64">
              <Image
                src={delight.image.imageUrl}
                alt={delight.image.description}
                fill
                className="object-cover"
                data-ai-hint={delight.image.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-xl">
                <UtensilsCrossed className="h-5 w-5 text-primary" />
                {delight.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{delight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
