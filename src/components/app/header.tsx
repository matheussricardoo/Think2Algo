import { LanguageSwitcher } from './language-switcher';

export function Header() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-end border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
