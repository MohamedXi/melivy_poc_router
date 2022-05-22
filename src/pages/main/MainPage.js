import { Grid, Typography as MuiTypography } from "@mui/material";
import { spacing } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";

const Typography = styled(MuiTypography)(spacing);

function Main() {
  console.log("Main");
  return (
    <React.Fragment>
      <Helmet title="Dashboard" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="subtitle1">
            Welcome back, Ismael ! We've missed you.{" "}
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Main;
