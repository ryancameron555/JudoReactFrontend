/** @format */

import { createTheme } from '@mui/material/styles';
// import { ThemeOptions } from '@mui/material/styles';

// Define the theme options
export const mainTheme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#b70000',
    },
    secondary: {
      main: '#de0202',
    },
    background: {
      default: '#ffffff',
    },
    divider: 'rgba(255,0,0,0)',
    text: {
      hint: '#65ffff',
      disabled: '#aaaaaa',
      secondary: '#ffffff',
      primary: '#000000',
    },
  },
  props: {
    MuiButton: {
      size: 'small',
    },
  },
  typography: {
    fontFamily: 'Lumanosimo',
    color: '#b70000',
  },
  shape: {
    borderRadius: 10,
  },
});
