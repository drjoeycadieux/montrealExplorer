
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export function Banner() {
  return (
    <div className="bg-destructive text-destructive-foreground">
      <div className="container py-2 text-center text-sm font-medium">
        <p className="flex items-center justify-center gap-2">
          <AlertTriangle className="h-4 w-4" />
          <span>
            Important COVID-19 Information for Montréal.{" "}
            <Link href="/covid-19" className="underline hover:text-destructive-foreground/80">
              Learn More
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
