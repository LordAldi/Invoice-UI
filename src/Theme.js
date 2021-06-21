import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";

const Theme = ({ children }) => {
  const theme = createMuiTheme({});
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
