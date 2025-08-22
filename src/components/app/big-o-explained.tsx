import { useI18n } from '@/lib/i18n';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';

export function BigOExplained() {
  const { t } = useI18n();
  const bigO = t.bigO;
  const complexities = Object.values(bigO.complexities).filter(item => typeof item === 'object');

  return (
    <ScrollArea className="h-full p-4 md:p-6">
      <div className="space-y-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{bigO.title}</CardTitle>
            <CardDescription className="text-lg">{bigO.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold mb-2">{bigO.importanceTitle}</h3>
            <p className="text-muted-foreground">{bigO.importanceDescription}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{bigO.complexities.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {complexities.map((complexity: any) => (
              <div key={complexity.name} className="border-b pb-4 last:border-b-0 last:pb-0">
                <h4 className="text-lg font-semibold text-primary mb-1">{complexity.name}</h4>
                <p className="text-muted-foreground mb-3">{complexity.description}</p>
                <div className='font-code text-sm'>
                    <span className='font-semibold'>{t.bigO.complexities.exampleLabel}</span>
                    <div className='text-muted-foreground bg-muted p-3 rounded-md mt-1 break-words'>
                      <p>{complexity.example}</p>
                    </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </ScrollArea>
  );
}
