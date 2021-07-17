import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

const Theme = ({ children }) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        "Raleway",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
    palette: {
      primary: {
        main: "rgba(130, 109, 255, 1)",
      },
      secondary: {
        main: "rgba(111, 111, 111, 1)",
        bg: "rgba(111, 111, 111, 0.25)",
      },
      success: {
        main: "rgba(64, 151, 83, 1)",
        bg: "rgba(64, 150, 83, 0.25)",
      },
      danger: {
        main: "rgba(236, 106, 44, 1)",
        bg: "rgba(236, 106, 44, 0.25)",
      },
      background: {
        default: "rgba(248, 247, 252, 1)",
        paper: "rgba(252, 252, 252, 1)",
      },
      text: {
        dark: "rgba(53, 53, 53, 1)",
        secondary: "rgba(142, 142, 142, 1)",
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: "100px",
        },
      },
    },
    props: {
      MuiButtonBase: {
        disableRipple: true,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
