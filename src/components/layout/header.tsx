import Link from 'next/link';
import { Mountain, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline text-xl">Montreal Explorer</span>
        </Link>
        <nav className="hidden flex-1 items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/districts" className="text-foreground/80 transition-colors hover:text-foreground">Districts</Link>
          <Link href="/cuisine" className="text-foreground/80 transition-colors hover:text-foreground">Cuisine</Link>
          <Link href="/culture" className="text-foreground/80 transition-colors hover:text-foreground">Culture</Link>
          <Link href="/about" className="text-foreground/80 transition-colors hover:text-foreground">About</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-9"
            />
          </div>
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
