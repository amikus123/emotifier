import { createTheme } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles/createTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    textInputBG: Palette['primary'];
    neutralColor: PaletteOptions['primary'];
  }
  interface PaletteOptions {
    textInputBG: PaletteOptions['primary'];
    neutralColor: PaletteOptions['primary'];

  }
}


const dark = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#0f0a05",
        },
        a: {
          textDecoration: "none",
          color: "#1B95E0",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#1B95E0",
    },
    secondary: {
      main: "#AA2200",
    },
    neutralColor:{
      main:"#e0e0e0"
    },
    textInputBG: {
      main: "#0f0a05",
    },
    background: {
      paper: "#0f0a05",
      default: "#0f0a05",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const light = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#ffefff",
        },
        a: {
          textDecoration: "none",
          color: "#AA2200",
        },
      },
    },
  },

  palette: {
    primary: {
      main: "#AA2200",
    },
    secondary: {
      main: "#1B95E0",
    },
    textInputBG: {
      main: "#0f0a05",
    },
    neutralColor:{
      main:"#e0e0e0"
    },
    background: {
      paper: "#fff",
      default: "#fff",
    },
    text: {
      primary: "#0D1821",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  // e0e0e0
});
// aa2200-ffffff-2b6dad-0d1821-ff9b54

export const getThemeFromString = (str: string) => {
  return str === "light" ? light : light;
};
