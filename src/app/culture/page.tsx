import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark, Mic, Paintbrush, Film } from 'lucide-react';

export default function CulturePage() {
    const culturalHighlights = [
        {
            icon: Landmark,
            title: "Museums & History",
            description: "Explore world-class museums like the Montreal Museum of Fine Arts and Pointe-à-Callière, showcasing history and art from across the globe.",
        },
        {
            icon: Mic,
            title: "Festivals & Events",
            description: "From the world's largest jazz festival to the laughter of the Just for Laughs comedy fest, the city's calendar is always packed.",
        },
        {
            icon: Paintbrush,
            title: "Vibrant Arts Scene",
            description: "Discover countless galleries, street art murals in The Plateau, and a thriving community of local artisans.",
        },
        {
            icon: Film,
            title: "Bilingual Heritage",
            description: "Experience the unique blend of French and English influences that shape Montréal's identity, from its language to its customs.",
        },
    ];

    return (
        <div className="container py-12 md:py-16">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
                    The Cultural Heartbeat of Montréal
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    A city of festivals, art, and history where creativity flourishes around every corner.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {culturalHighlights.map((highlight) => (
                    <Card key={highlight.title}>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <highlight.icon className="h-10 w-10 text-primary" />
                            <div>
                                <CardTitle className="font-headline text-xl">{highlight.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-base">{highlight.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
