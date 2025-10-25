import Link from 'next/link';
import { Mountain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg">Montreal Explorer</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Montreal Explorer. All rights reserved.
          </p>
          <nav className="flex items-center space-x-4 text-sm font-medium">
            <Link href="/privacy" className="text-muted-foreground transition-colors hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="text-muted-foreground transition-colors hover:text-foreground">Terms</Link>
            <Link href="https://montrealexplorer-api.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">Backend</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
