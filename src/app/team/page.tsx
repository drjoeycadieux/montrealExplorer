
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Code, Brush, Target } from 'lucide-react';

export default function TeamPage() {
  const teamValues = [
    {
      icon: Code,
      title: 'Innovation',
      description: 'We are driven by a passion for technology and are constantly exploring new ways to build amazing user experiences.',
    },
    {
      icon: Brush,
      title: 'Creativity',
      description: 'Our team thrives on creative energy, designing intuitive and beautiful interfaces that bring our ideas to life.',
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Our goal is to deliver a high-quality, engaging application that showcases the best of Montreal to the world.',
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Meet the Hackerfest Team
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          We are a collective of passionate developers, designers, and thinkers who collaborated during Hackerfest to create Montreal Explorer.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {teamValues.map((value) => (
            <Card key={value.title} className="text-center">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <value.icon className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
}
