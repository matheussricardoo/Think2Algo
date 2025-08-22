import { LanguageSwitcher } from './language-switcher';

type HeaderProps = {
    children?: React.ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-3">
            {children}
        </div>
        <div className="flex items-center gap-3">
            <LanguageSwitcher />
        </div>
    </header>
  );
}
