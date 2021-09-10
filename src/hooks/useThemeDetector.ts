import { useEffect, useState } from 'react';

export const useThemeDetector = (): boolean => {
  const getCurrentTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

  const mqListener = (e: { matches: boolean | ((prevState: boolean) => boolean) }) =>
    setIsDarkTheme(e.matches);

  useEffect(() => {
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
    darkThemeMq.addEventListener('change', mqListener);
  }, []);

  return isDarkTheme;
};
