const PALETTE = {
  lighest: "#fff",
  darkest: "#1b1b1b",
  grey01: "#484848",
  grey02: "#7b7b7b",
  grey03: "#ababab",
  grey04: "#d7d7d7",
  primary01: "#F750A9", // pink
  primary02: "#F765B2",
  secondary01: "#EFB044", // mustard
  secondary02: "#FFC016",
  tertiary01: "#8F856B", // sandal
  tertiary02: "#B0A484",
  tertiary03: "#D4CAB0",
  tertiary04: "#F0ECE1",
  tertiary05: "#FAF7F0",
  quaternary01: "#E5DEFF", // lilac
  quaternary02: "#F3F0FF",
};

export const COLORS = {
  ink: {
    light: PALETTE.darkest, // white
    dark: PALETTE.lighest, // near-black
  },
  background: {
    light: PALETTE.primary02, // white
    dark: PALETTE.darkest, // navy navy blue
  },
  paper: {
    light: PALETTE.lighest,
    dark: PALETTE.lighest,
  },
};

export const COLOR_MODE_KEY = "color-mode";
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode";
