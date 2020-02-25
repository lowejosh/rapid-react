import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Box } from "@material-ui/core";
import { Content } from "./Content/Content";
import { Sidebar } from "./Sidebar/Sidebar";

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <Box display="flex">
        <Sidebar />
        <Content />
      </Box>
    </ThemeProvider>
  );
};

export default App;
