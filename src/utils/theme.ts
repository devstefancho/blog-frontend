import { Theme } from '@/constants/theme';

export const getNextTheme = () => {
  // @todo 다크모드 관리가 안되어서 일단 항상 라이트모드로 설정
  return Theme.LIGHT;
};
