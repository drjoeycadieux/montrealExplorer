import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="font-headline text-3xl font-bold tracking-tight text-primary md:text-4xl text-center">
            Terms of Service
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose prose-lg dark:prose-invert mx-auto text-foreground/80">
            <h2 className="font-headline text-primary">1. Agreement to Terms</h2>
            <p>
              By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We may update these terms from time to time, and your continued use of our services constitutes acceptance of those changes.
            </p>
            <h2 className="font-headline text-primary">2. Use of Services</h2>
            <p>
              You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.
            </p>
            <h2 className="font-headline text-primary">3. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, and any software used on the site, is the property of Montreal Explorer or its suppliers and protected by copyright and other intellectual property laws.
            </p>
            <h2 className="font-headline text-primary">4. Limitation of Liability</h2>
            <p>
                In no event shall Montreal Explorer, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
