import {
  jssPreset, StylesProvider
} from "@mui/styles";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { create } from "jss";
import 'moment/locale/fr';
import React from "react";
import { Helmet } from "react-helmet";
import Routes from "./routes/Routes";

// import AuthAPI from "./services/authService"

// AuthAPI.setup();s

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

export function App() {
  console.log("App");

  return (
    <React.Fragment>
      <Helmet
        titleTemplate="%s | melivy"
        defaultTitle="The best way to find your next maritime transport | melivy"
      />
      <StylesProvider jss={jss}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Routes />
        </LocalizationProvider>
      </StylesProvider>
    </React.Fragment>
  );
}