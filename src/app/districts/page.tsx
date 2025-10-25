import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

export default function DistrictsPage() {
  const districts = [
    { name: 'Old Montréal', description: 'Historic heart with cobblestone streets and centuries-old architecture.' },
    { name: 'The Plateau', description: 'Bohemian vibe with colorful houses, murals, and trendy boutiques.' },
    { name: 'Mile End', description: 'Artistic hub known for its bagels, indie music scene, and vintage shops.' },
    { name: 'Griffintown', description: 'Former industrial area now booming with condos, restaurants, and galleries.' },
    { name: 'Little Italy', description: 'A vibrant community with authentic trattorias and the Jean-Talon Market.' },
    { name: 'Downtown', description: 'The central business district, home to museums, shopping, and McGill University.' },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Montréal's Diverse Districts
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Each neighborhood tells a different story. Explore the unique character of the city's districts.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {districts.map((district) => (
          <Card key={district.name}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-headline text-xl">
                <MapPin className="h-5 w-5 text-primary" />
                {district.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{district.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
