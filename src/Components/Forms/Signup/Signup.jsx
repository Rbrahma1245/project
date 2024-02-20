import { ErrorMessage, Field, Form, Formik } from "formik";
import { Component } from "react";
import "./Signup.scss";
import * as Yup from "yup";
import { Typography } from "@mui/material";

class Signup extends Component {
  render() {
    const validationSchema = Yup.object().shape({
      userName: Yup.string().required("User name is required"),
      email: Yup.string().email("Invalid Email").required("Email required"),
      password: Yup.string()
        .required("Password required")
        .min(8, "Password must be at least 8 characters"),
    });
    return (
      <div style={{ height: "100vh" }} className="signup-container">
        <Typography variant="h6">SIGNUP FORM</Typography>
        <Formik
          initialValues={{ userName: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="signup-form">
            <div>
              <Field
                type="text"
                name="userName"
                placeholder="Enter User Name"
              />
              <span className="error">
                <ErrorMessage name="userName" />
              </span>
            </div>

            <div>
              <Field type="email" name="email" placeholder="Enter Email" />
              <span className="error">
                <ErrorMessage name="email" className="error" />
              </span>
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Enter Password"
              />
              <span className="error">
                <ErrorMessage name="password" />
              </span>
            </div>

            {/* <button type="submit">SUBMIT</button> */}
          </Form>
        </Formik>
      </div>
    );
  }
}

export default Signup;
