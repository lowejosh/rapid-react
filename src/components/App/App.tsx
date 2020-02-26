import React from "react";
import { Content } from "./Content";
import { Sidebar } from "./Sidebar/Sidebar";
import { Box, AppBar } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { mainTheme } from "../../themes/mainTheme";
import CssBaseline from "@material-ui/core/CssBaseline";

export const App: React.FC<{}> = () => {
  console.log(mainTheme);
  return (
    <ThemeProvider theme={{ mainTheme }}>
      <CssBaseline />
      <AppBar />
      <Box display="flex">
        <Sidebar />
        <Content />
      </Box>
    </ThemeProvider>
  );
};
