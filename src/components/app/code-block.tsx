'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useI18n } from '@/lib/i18n.tsx';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('python', python);

type CodeBlockProps = {
  code: string;
  language: string;
};

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast();
  const { t } = useI18n();
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setHasCopied(true);
      toast({
        title: t.codeBlock.copied,
        description: t.codeBlock.copiedSuccess.replace('{language}', language),
      });
      setTimeout(() => setHasCopied(false), 2000);
    });
  };

  return (
    <div className="relative rounded-md bg-muted font-code">
      <div className="absolute right-2 top-2 flex items-center justify-between">
        <Button size="icon" variant="ghost" className="h-7 w-7" onClick={copyToClipboard}>
          {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          <span className="sr-only">{t.codeBlock.copyCode}</span>
        </Button>
      </div>
      <pre className="overflow-x-auto p-4 pt-10 text-sm">
        <code ref={codeRef} className={`language-${language} rounded-lg`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
