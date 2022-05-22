import { Alert as MuiAlert } from "@mui/lab";
import {
  Button, Checkbox,
  FormControlLabel, Paper,
  TextField as MuiTextField,
  Typography
} from "@mui/material";
import { spacing } from "@mui/system";
import { Formik } from "formik";
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import * as Yup from "yup";


const Alert = styled(MuiAlert)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)}px;
  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(20)}px;
  }
`;

function SignIn() {
    // const history = useNavigate();

    return (
        <Wrapper>
            <Helmet title=""/>

            <Typography component="h1" variant="h2" align="center" gutterBottom>
                Hody & Co.
            </Typography>
            <Typography component="h2" variant="body1" align="center">
                Welcome back ! Sign in to your account to continue
            </Typography>

            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    submit: false,
                }}
                validationSchema={Yup.object().shape({
                    username: Yup.string()
                        .email("Must be a valid email")
                        .max(255)
                        .required("Email is required"),
                    password: Yup.string().max(255).required("Password is required"),
                })}
                onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {}}
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
                    <form style={{marginTop: '35px'}} noValidate onSubmit={handleSubmit}>
                        {errors.submit && (
                            <Alert mt={2} mb={5} severity="warning">
                                {errors.submit}
                            </Alert>
                        )}
                        <TextField
                            type="email"
                            name="username"
                            label="Email Address"
                            variant="outlined"
                            error={Boolean(touched.username && errors.username)}
                            fullWidth
                            helperText={touched.username && errors.username}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            my={2}
                        />
                        <TextField
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            error={Boolean(touched.password && errors.password)}
                            fullWidth
                            helperText={touched.password && errors.password}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            my={2}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            color="primary"
                            variant="contained"
                            size="large"
                            disabled={isSubmitting}
                            style={{marginBottom: '10px', marginTop: '10px'}}
                        >
                            Sign in
                        </Button>
                        <Button
                            component={Link}
                            to="/auth/reset-password"
                            fullWidth
                            color="default"
                            variant="contained"
                            size="large"
                        >
                            Forgot password
                        </Button>
                    </form>
                )}
            </Formik>
        </Wrapper>
    );
}

export default SignIn;
