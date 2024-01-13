import { Theme } from '@/constants/theme';

export const getNextTheme = (theme: Theme) => {
  return theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
};
