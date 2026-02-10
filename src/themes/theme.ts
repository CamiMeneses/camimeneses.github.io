// =============================================================================
// COLOR PALETTE - Synchronized with theme.scss
// =============================================================================

export const colors = {
  // Background colors
  background: "#0e091a",
  backgroundLight: "#301d49",

  // Neutral colors
  white: "#ffffff",
  light: "#e8e8e8",
  gray: "#444444",
  dark: "#0b0c10",

  // Primary palette - Purples
  purpleLight: "#a682ff",
  purple: "#a31ed8",
  purpleDark: "#3c245c",

  // Secondary palette - Pinks
  pink: "#d64d88",
  pinkHot: "#fa3989",
  pinkBright: "#f87df2",

  // Accent colors
  coral: "#fc7979",
  teal: "#23efc6",
  blue: "#0099ff",
  yellow: "#fff79e",
  green: "#85e285",
} as const;

// =============================================================================
// SEMANTIC TOKENS
// =============================================================================

export const semantic = {
  // Text colors
  textPrimary: colors.light,
  textSecondary: colors.pinkBright,
  textAccent: colors.yellow,
  textInverse: colors.background,

  // Component backgrounds
  experienceIconBg: colors.white,
  particlesColor: colors.coral,
} as const;

// =============================================================================
// LEGACY EXPORT (backwards compatibility)
// =============================================================================

export const theme = {
  primary: colors.dark,
  textColor: colors.teal,
};

export default colors;
