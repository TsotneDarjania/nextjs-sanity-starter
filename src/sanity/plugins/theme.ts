import { buildLegacyTheme } from "sanity";

const props = {
  primaryDarkBlue: "#272955",
  primaryBlue: "#5975D9",
  primaryOrange: "#FF8068",
  secondaryPeach: "#FFB3A4",
  secondaryLightGrey: "#F8F7F7",
  secondaryLightBlue: "#DEE3F7",
};

export const theme = buildLegacyTheme({
  "--black": "#000",
  "--white": "#fff",
  "--component-bg": props.secondaryLightGrey,

  "--brand-primary": props.primaryOrange,

  // Default button
  "--default-button-color": props.primaryOrange,

  "--main-navigation-color": props.primaryDarkBlue,
  "--main-navigation-color--inverted": props.secondaryLightBlue,
});
