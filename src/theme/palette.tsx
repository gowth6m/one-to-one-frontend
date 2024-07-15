import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

export type ColorSchema = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    dialog: string;
    neutral: string;
    drawer: string;
  }
  interface SimplePaletteColorOptions {
    darker: string;
    lighter: string;
  }
  interface PaletteColor {
    darker: string;
    lighter: string;
  }
  interface TextColor {
    disabled: string;
    primary: string;
    secondary: string;
    tertiary: string;
  }
}

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#CCD5DB',
  500: '#9DA8B4',
  600: '#4B5662',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  lighter: '#33FFCC',
  light: '#0AFFC2',
  main: '#00DCA5',
  dark: '#00B88A',
  darker: '#008F6B',
  contrastText: '#161C24',
};

export const secondary = {
  lighter: '#008F8F',
  light: '#006666',
  main: '#003C3C',
  dark: '#002929',
  darker: '#001414',
  contrastText: '#f8f8f8',
};

export const info = {
  lighter: '#367DD3',
  light: '#2869B8',
  main: '#205493',
  dark: '#1A4375',
  darker: '#123054',
  contrastText: '#F8F8F8',
};

export const success = {
  lighter: '#D3FCD2',
  light: '#77ED8B',
  main: '#22C55E',
  dark: '#118D57',
  darker: '#065E49',
  contrastText: '#F8F8F8',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

// ERROR COLORS

export const errorLight = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#981B1E',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#F8F8F8',
};

export const error = {
  lighter: '#FF0A0A',
  light: '#E00000',
  main: '#981b1e',
  dark: '#8F0000',
  darker: '#660000',
  contrastText: '#F8F8F8',
};

export const errorDark = {
  lighter: '#f8f8f8',
  light: '#FFEBEB',
  main: '#FFC7C7',
  dark: '#FFADAD',
  darker: '#FF8585',
  contrastText: '#212B36',
};

// COMMON COLORS

export const common = {
  black: '#080A0D',
  white: '#F8F8F8',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.5),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.3),
  action,
};

// ----------------------------------------------------------------------

export function palette(mode: 'light' | 'dark') {
  const light = {
    ...base,
    mode: 'light',
    primary,
    secondary,
    error: errorLight,
    text: {
      primary: grey[800],
      secondary: grey[600],
      tertiary: grey[600],
      disabled: grey[500],
    },
    background: {
      paper: grey[100],
      default: grey[200],
      neutral: grey[200],
      drawer: grey[200],
      dialog: grey[200],
    },
    action: {
      ...base.action,
      active: grey[600],
    },
  };

  const dark = {
    ...base,
    mode: 'dark',
    primary,
    secondary,
    error: errorDark,
    text: {
      primary: '#f8f8f8',
      secondary: grey[500],
      tertiary: grey[500],
      disabled: grey[600],
    },
    background: {
      paper: grey[800],
      default: grey[900],
      neutral: alpha(grey[500], 0.12),
      drawer: grey[900],
      dialog: grey[800],
    },
    action: {
      ...base.action,
      active: grey[500],
    },
  };

  return mode === 'light' ? light : dark;
}
