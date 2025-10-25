
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Info } from 'lucide-react';

export default function Covid19Page() {
  return (
    <div className="container py-12 md:py-16">
      <Card className="max-w-3xl mx-auto border-yellow-500/50 dark:border-yellow-400/50">
        <CardHeader>
          <div className="flex items-center gap-4">
            <AlertTriangle className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />
            <CardTitle className="font-headline text-3xl font-bold tracking-tight text-yellow-500 dark:text-yellow-400 md:text-4xl">
              COVID-19 Health Advisory
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg dark:prose-invert mx-auto text-foreground/80">
            <p>
              Please be aware that COVID-19 remains a risk in Montréal. We urge all residents and visitors to stay informed about the latest public health guidelines and take necessary precautions to protect themselves and others.
            </p>
            <h3 className="font-headline text-primary flex items-center gap-2"><Info className="h-5 w-5" /> Key Recommendations</h3>
            <ul>
              <li><strong>Stay Home if Sick:</strong> If you have symptoms of COVID-19, stay home and isolate to prevent transmission.</li>
              <li><strong>Masking:</strong> Consider wearing a well-fitting mask in crowded indoor spaces.</li>
              <li><strong>Hygiene:</strong> Wash your hands frequently with soap and water or use an alcohol-based hand sanitizer.</li>
              <li><strong>Vaccination:</strong> Keep your vaccinations up to date as recommended by public health authorities.</li>
            </ul>
            <p>
              For the most current information, please consult official sources such as the <a href="https://santemontreal.qc.ca/en/public" target="_blank" rel="noopener noreferrer">Santé Montréal website</a> or the <a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus" target="_blank" rel="noopener noreferrer">Government of Québec's official page</a>.
            </p>
            <p className="text-sm text-muted-foreground">
              This information is for general guidance and is not a substitute for professional medical advice.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
