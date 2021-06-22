import { createMuiTheme, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

const Theme = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "rgba(130, 109, 255, 1)",
      },
      secondary: {
        main: "rgba(236, 106, 44, 1)",
      },
      background: {
        default: "rgba(248, 247, 252, 1)",
        paper: "rgba(252, 252, 252, 1)",
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
