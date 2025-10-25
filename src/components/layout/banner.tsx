import { Snowflake } from 'lucide-react';
import Link from 'next/link';

export function Banner() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container py-2 text-center text-sm font-medium">
        <p className="flex items-center justify-center gap-2">
          <Snowflake className="h-4 w-4" />
          <span>
            Winter is here! See our guide to seasonal activities.{" "}
            <Link href="#" className="underline hover:text-primary-foreground/80">
              Explore now
            </Link>
            .
          </span>
        </p>
      </div>
    </div>
  );
}
