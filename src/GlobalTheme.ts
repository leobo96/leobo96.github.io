import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

// example theme
let theme = extendTheme(
  {
    styles: {
      global: {
        body: {
          fontFamily: "Courier Prime, monospace",
        },
        "#root": {
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        },
      },
    },
    fonts: {
      body: "Courier Prime, monospace",
      heading: "Special Elite, cursive",
    },
    components: {
      Heading: {
        baseStyle: {
          bgGradient: "linear(to-l, red.500, blue.500)",
          bgClip: "text",
        },
        variants: {
          dark: {
            color: "gray.700",
          },
        },
      },
      Text: {
        baseStyle: {
          color: "gray.600",
        },
        variants: {
          gradient: {
            bgGradient: "linear(to-l, red.500, blue.500)",
            bgClip: "text",
          },
        },
      },
      Button: {
        baseStyle: {
          _hover: {
            textDecoration: "none",
          },
        },
        variants: {
          outline: {
            _hover: {
              textDecoration: "underline",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "red",
    components: ["Button"],
  })
);

export default theme;
