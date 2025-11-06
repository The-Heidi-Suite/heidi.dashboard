import { Moon, Sun } from 'lucide-react';

import { useTheme } from 'next-themes';

import { Switch } from '@/components/ui/switch';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-2">
      <Sun className="w-4 h-4" />
      <Switch
        aria-label="Toggle dark mode"
        id="dark-mode-toggle"
        aria-checked={theme === 'dark'}
        checked={theme === 'dark'}
        onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
        className="data-[state=checked]:bg-primary"
      />
      <Moon className="w-4 h-4" />
    </div>
  );
};

export default ThemeSwitcher;
