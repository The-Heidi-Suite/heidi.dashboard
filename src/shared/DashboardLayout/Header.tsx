import { SidebarTrigger } from '@/components/ui/sidebar';
import LanguageSelector from '@/shared/LanguageSelector';
import ThemeSwitcher from '@/shared/ThemeSwitcher';

const Header = () => {
  return (
    <header className="h-16 w-full fixed right-0 bg-background border-b border-border flex items-center justify-between px-6">
      {/* Right side */}
      <div className="flex flex-row w-full space-x-4 justify-end items-center">
        <div className="w-full flex justify-start">
          <SidebarTrigger className="md:hidden block self-end" />
        </div>
        {/* Dark/Light Mode Toggle */}
        <ThemeSwitcher />
        {/* Language Switcher */}
        <LanguageSelector />
      </div>
    </header>
  );
};

export { Header };
