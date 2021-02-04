import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { AppSwitch } from "./routes";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, pink } from "@material-ui/core/colors";
import './index.css';

function App() {
  const theme = createMuiTheme({
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 25,
        },
      },
    },
    palette: {
      primary: {
        main: '#5D97DB'
      },
      secondary: {
        main: '#3D7DCA'
      },
      whiteTheme: {
        main: '#FFFFFF'
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AppSwitch />
      </Router>
    </ThemeProvider>

    /* <Router>
    <AppSwitch/>
    </Router> */
  );
}

export default App;