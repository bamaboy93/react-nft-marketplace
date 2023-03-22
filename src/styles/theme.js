export const theme = {
  fonts: {
    main: '"Space Mono", monospace',
  },
  colors: {
    background: {
      light: "#3b3b3b",
      main: "#2b2b2b",
    },
    grey: "#858584",
    white: "#FFFFFF",
    accent: "#A259FF",
    gradient1: "linear-gradient(128.15deg, #A259FF 49.75%, #377DF7 136.56%)",
    gradient2: "linear-gradient(100.92deg, #A259FF 13.57%, #FF6250 97.65%)",
  },
  animation: {
    cubic: "cubic-bezier(0.4, 0, 0.2, 1)",
    main: "all 250ms cubic-bezier(0.4, 0, 0.2, 1)",
    color: "color 250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  space: [
    0, 8, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 72, 80, 92, 100, 112, 124,
    144,
  ],

  fontSizes: {
    xs: "12px",
    s: "16px",
    m: "22px",
    l: "28px",
    xl: "38px",
    xxl: "51px",
    xxxl: "67px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.4,
    heading: 1.1,
  },
  borders: {
    none: "none",
    normal: "1px solid",
  },
  radii: {
    none: "0",
    normal: "4px",
    round: "50%",
  },
};

// ${props => props.theme.colors.primary}
