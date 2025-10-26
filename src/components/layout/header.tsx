
'use client';

import Link from 'next/link';
import { Mountain, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useState } from 'react';

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const closeSheet = () => setIsSheetOpen(false);

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
          <Link href="/blog" className="text-foreground/80 transition-colors hover:text-foreground">Blog</Link>
          <Link href="/security" className="text-foreground/80 transition-colors hover:text-foreground">Security</Link>
          <Link href="/team" className="text-foreground/80 transition-colors hover:text-foreground">Team</Link>
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
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-6" onClick={closeSheet}>
                <Mountain className="h-6 w-6 text-primary" />
                <span className="font-bold font-headline text-xl">Montreal Explorer</span>
              </Link>
              <nav className="flex flex-col space-y-4 text-lg">
                <Link href="/districts" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>Districts</Link>
                <Link href="/cuisine" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>Cuisine</Link>
                <Link href="/culture" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>Culture</Link>
                <Link href="/blog" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>Blog</Link>
                <Link href="/security" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>Security</Link>
                <Link href="/team" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>Team</Link>
                <Link href="/about" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>About</Link>
                <Link href="/contact" className="text-foreground/80 transition-colors hover:text-foreground" onClick={closeSheet}>Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
