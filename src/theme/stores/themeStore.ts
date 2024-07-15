import { create } from 'zustand';
import { AppConfig } from '@/config/config-app';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Theme } from '@mui/material';

export type PrimaryColors = 'orange' | 'blue' | 'green';

interface ThemeState {
  getTheme: () => Theme;
  primaryColor: PrimaryColors;
  setPrimaryColor: (color: PrimaryColors) => void;
  setTheme: (theme: Theme) => void;
  theme: 'light' | 'dark';
  themeObj: Theme;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      themeObj: {} as Theme,
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
      setTheme: (theme: Theme) => set({ themeObj: theme }),
      getTheme: () => get().themeObj,
      primaryColor: 'orange',
      setPrimaryColor: (color: PrimaryColors) => set({ primaryColor: color }),
    }),
    {
      name: AppConfig.localStorageKeys.theme,
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useThemeStore;
