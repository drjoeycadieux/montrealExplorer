
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, GitBranch, Terminal, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DeveloperPortalPage() {
  const devResources = [
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Explore available API endpoints and learn how to integrate with our services.',
      linkText: 'View Docs',
      href: '#',
    },
    {
      icon: GitBranch,
      title: 'GitHub Repository',
      description: 'Access the source code, contribute to the project, and report issues on GitHub.',
      linkText: 'Go to GitHub',
      href: 'https://github.com/your-username/montreal-explorer',
    },
    {
      icon: Terminal,
      title: 'Getting Started Guide',
      description: 'Set up your local development environment and start building with our comprehensive guide.',
      linkText: 'Start Setup',
      href: '#',
    },
  ];

  return (
    <div className="container py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Developer Portal
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Your hub for resources, tools, and documentation to build with Montreal Explorer.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {devResources.map((resource) => (
          <Card key={resource.title} className="flex flex-col">
            <CardHeader className="flex flex-row items-start gap-4">
              <resource.icon className="h-10 w-10 text-primary mt-1" />
              <div>
                <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{resource.description}</CardDescription>
            </CardContent>
            <div className="p-6 pt-0">
               <Button asChild variant="link" className="p-0 h-auto font-semibold text-primary hover:text-accent-foreground">
                <Link href={resource.href}>
                  {resource.linkText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
