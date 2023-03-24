import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#ffffff", "#1a1a1a")(props),
      transition: "background-color .35s cubic-bezier(.4,0,.2,1)",
    },
  }),
};
const fonts = {
  heading: "'Poppins' sans-serif",
};
const colors = {
  text: "#1a202c",
  darkText: "#ffffffeb",
  redLight: "#CE1110",
  hoverRedLight: "#bd1d26",
  activeRedLight: "#ad1b22",
  hoverLightRedButton: "#FAE8E9",
  hoverDarkRedButton: "#7D1D22",
  activeLightRedButton: "#F9D9DB",
  activeDarkRedButton: "#6a1a1e",
};
const components = {
  Heading: {
    variants: {
      "section-title": {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: {
      color: colors.redLight,
      textUnderlineOffset: 5,
    },
    variants: {
      "red-link": {
        color: colors.redLight,
        backgroundImage: "linear-gradient(currentColor, currentColor)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 2px",
        backgroundPosition: "0% 100%",
        transition:
          "currentColor 250ms cubic-bezier(0.4, 0, 0.2, 1), background-size 250ms cubic-bezier(0.4, 0, 0.2, 1)",
        ":hover, :focus": {
          color: colors.hoverRedLight,
          backgroundSize: "100% 2px",
          textDecoration: "none",
        },
        ":active": {
          color: colors.activeRedLight,
        },
      },
    },
  },
  Text: {
    baseStyle: (props) => ({
      color: mode(colors.text, colors.darkText)(props),
    }),
  },
  Button: {
    variants: {
      "red-button": (props) => ({
        backgroundColor: mode("#8f8f8f1a", colors.redLight)(props),
        ":hover": {
          backgroundColor: mode(
            colors.hoverLightRedButton,
            colors.hoverDarkRedButton
          )(props),
        },
        ":active": {
          backgroundColor: mode(
            colors.activeLightRedButton,
            colors.activeDarkRedButton
          )(props),
        },
      }),
    },
  },
};
const config = {
  initialColorMode: "system",
  useSystemColorMode: true,
  disableTransitionOnChange: false,
};
const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
