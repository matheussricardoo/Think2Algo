'use client';

import { useI18n } from '@/lib/i18n';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { CheckCircle } from 'lucide-react';

export function MikeFramework() {
  const { t } = useI18n();
  const framework = t.mikeFramework;
  const sections = Object.entries(framework).filter(([key]) => ['match', 'implement', 'know', 'explain'].includes(key));

  return (
    <ScrollArea className="h-full p-4 md:p-6">
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl md:text-3xl">{framework.title}</CardTitle>
            <CardDescription className="text-sm sm:text-base md:text-lg">{framework.description}</CardDescription>
          </CardHeader>
        </Card>

        {sections.map(([key, sectionData]: [string, any]) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl text-primary">{sectionData.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base">{sectionData.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {sectionData.steps.map((step: any, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-base sm:text-lg">{step.title}</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">{step.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
