import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#1a1a1a")(props),
      transitionProperty: "all",
      transitionDuration: ".35s cubic-bezier(.4,0,.2,1)",
    },
  }),
};
const fonts = {
  heading: "'Roboto' sans-serif",
};
const colors = {
  redLight: "#CE2029",
  hoverRedLight: "#bd1d26",
  activeRedLight: "#ad1b22",
};
const components = {
  Heading: {
    variants: {
      "section-title": (props) => ({
        fontSize: 20,
        textUnderlineOffset: 6,
        marginTop: 3,
        marginBottom: 4,
        backgroundImage: mode(
          "linear-gradient(120deg,#FAE8E9,#FAE8E9)",
          "linear-gradient(120deg,#7D1D22,#7D1D22)"
        )(props),
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% .2em",
        backgroundPosition: "0 88%",
        width: "fit-content",
      }),
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#20cec5", "#6e20ce")(props),
      textUnderlineOffset: 5,
    }),
    variants: {
      "red-link": {
        color: colors.redLight,
        backgroundImage: "linear-gradient(currentColor, currentColor)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 2px",
        backgroundPosition: "0% 100%",
        textDecoration: "none",
        transition:
          "currentColor 250ms cubic-bezier(0.4, 0, 0.2, 1), background-size 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        ":hover, :focus": {
          color: colors.hoverRedLight,
          backgroundSize: "100% 2px",
        },
        ":active": {
          color: colors.activeRedLight,
        },
      },
    },
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
