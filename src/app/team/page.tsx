
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Lead Developer',
      image: PlaceHolderImages.find(p => p.id === 'team-member-1')!,
    },
    {
      name: 'Maria Garcia',
      role: 'UI/UX Designer',
      image: PlaceHolderImages.find(p => p.id === 'team-member-2')!,
    },
    {
      name: 'Chen Wei',
      role: 'Backend Engineer',
      image: PlaceHolderImages.find(p => p.id === 'team-member-3')!,
    },
    {
      name: 'Olivia Smith',
      role: 'Project Manager',
      image: PlaceHolderImages.find(p => p.id === 'team-member-4')!,
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Meet the Hackerfest Team
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          The passionate individuals behind Montreal Explorer.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member) => (
          <Card key={member.name} className="text-center">
            <div className="relative mx-auto mt-6 h-32 w-32 rounded-full overflow-hidden">
               <Image
                src={member.image.imageUrl}
                alt={`Portrait of ${member.name}`}
                fill
                className="object-cover"
                data-ai-hint={member.image.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-xl">{member.name}</CardTitle>
              <CardDescription className="text-primary">{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Passionate about technology and creating amazing user experiences.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
