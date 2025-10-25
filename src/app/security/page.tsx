
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldAlert, Info, Smartphone, Eye, Lock } from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card className="max-w-3xl mx-auto border-orange-500/50 dark:border-orange-400/50">
        <CardHeader>
          <div className="flex items-center gap-4">
            <ShieldAlert className="h-10 w-10 text-orange-500 dark:text-orange-400" />
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-orange-500 dark:text-orange-400 md:text-4xl">
              Staying Safe in Montréal
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg dark:prose-invert mx-auto text-foreground/80">
            <p>
              Montréal is generally a safe and welcoming city for residents and visitors alike. However, like any major urban area, it's wise to take precautions to ensure your visit is smooth and trouble-free.
            </p>
            <h3 className="font-headline text-primary flex items-center gap-2"><Info className="h-5 w-5" /> General Safety Tips</h3>
            <ul>
              <li>
                <strong className="flex items-center gap-2"><Eye />Be Aware of Your Surroundings:</strong> Always be mindful of what's happening around you, especially in crowded tourist areas and on public transportation.
              </li>
              <li>
                <strong className="flex items-center gap-2"><Lock />Protect Your Belongings:</strong> Keep your valuables, like wallets, passports, and electronics, secure and out of sight. Avoid leaving bags unattended in public spaces.
              </li>
              <li>
                <strong>Use Official Transportation:</strong> Stick to licensed taxis or well-known ride-sharing services. Be cautious of unsolicited offers for rides.
              </li>
              <li>
                <strong className="flex items-center gap-2"><Smartphone />Emergency Services:</strong> In case of an emergency, dial <strong>911</strong> for police, fire, or medical assistance.
              </li>
            </ul>
            <p>
              By staying alert and using common sense, you can enjoy all the wonderful experiences Montréal has to offer with peace of mind.
            </p>
             <p className="text-sm text-muted-foreground">
              This information is for general guidance. Always trust your instincts and prioritize your personal safety.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
