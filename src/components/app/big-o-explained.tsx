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
            <CardTitle className="text-xl sm:text-2xl md:text-3xl">{bigO.title}</CardTitle>
            <CardDescription className="text-sm sm:text-base md:text-lg">{bigO.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{bigO.importanceTitle}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">{bigO.importanceDescription}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">{bigO.complexities.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {complexities.map((complexity: any) => (
              <div key={complexity.name} className="border-b pb-4 last:border-b-0 last:pb-0">
                <h4 className="text-base sm:text-lg font-semibold text-primary mb-1">{complexity.name}</h4>
                <p className="text-muted-foreground mb-3 text-sm sm:text-base">{complexity.description}</p>
                <div className='font-code text-xs sm:text-sm'>
                    <span className='font-semibold'>{t.bigO.complexities.exampleLabel}</span>
                    <div className='text-muted-foreground bg-muted p-3 rounded-md mt-1 break-words overflow-x-auto'>
                      <p className="whitespace-pre-wrap">{complexity.example}</p>
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
