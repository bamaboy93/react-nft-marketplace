import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
    },
  },
  palette: {
    primary: {
      light: "#858584",
      main: "#3B3B3B",
      dark: "#2B2B2B",
    },
    secondary: {
      main: "#A259FF",
    },
  },
  typography: {
    fontFamily: ["Space Mono", "monospace"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: ["Space Mono", "monospace"].join(","),
      fontSize: 67,
    },
    h2: {
      fontFamily: ["Space Mono", "monospace"].join(","),
      fontSize: 51,
    },
    h3: {
      fontFamily: ["Space Mono", "monospace"].join(","),
      fontSize: 38,
    },
    h4: {
      fontFamily: ["Space Mono", "monospace"].join(","),
      fontSize: 28,
    },
    h5: {
      fontFamily: ["Space Mono", "monospace"].join(","),
      fontSize: 22,
    },
    body1: {
      fontFamily: ["Space Mono", "monospace"].join(","),
      fontSize: 16,
    },
    caption: {
      fontFamily: ["Space Mono", "monospace"].join(","),
      fontSize: 12,
    },
  },

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#3B3B3B",
          color: "#fff",
        },
      },
    },
  },
});
