import { Alert as MuiAlert } from "@mui/lab";
import {
  Button,
  Paper,
  TextField as MuiTextField,
  Typography
} from "@mui/material";
import { spacing } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import * as Yup from "yup";


const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)}px;
  }
`;

function ResetPassword() {
  // const history = useNavigate();

  return (
    <Wrapper>
      <Helmet title="Reset Password" />

      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Reset Password
      </Typography>
      <Typography component="h2" variant="body1" align="center">
        Enter your email to reset your password
      </Typography>

      <Formik
        initialValues={{
          email: "",
          submit: false,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Must be a valid email")
            .max(255)
            .required("Email is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {}}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            {errors.submit && (
              <Alert mt={2} mb={1} severity="warning">
                {errors.submit}
              </Alert>
            )}
            <TextField
              type="email"
              name="email"
              label="Email Address"
              value={values.email}
              error={Boolean(touched.email && errors.email)}
              fullWidth
              helperText={touched.email && errors.email}
              onBlur={handleBlur}
              onChange={handleChange}
              my={3}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Reset password
            </Button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
}

export default ResetPassword;
