import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import "../assets/css/main.css";
import * as Yup from "yup";
import firebase from "../config/firebase";
import { useHistory } from "react-router-dom";

export default function SignUp() {
  const [isLoading] = useState(false);
  const history = useHistory();
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(value, formikBag) => {
        // console.log("Formik", value);
        firebase
          .auth()
          .createUserWithEmailAndPassword(value.email, value.password)
          .then((res) => {
            history.replace("/");
          })
          .catch((e) => {
            formikBag.setFieldError("email", e.message);
          });
      }}
      validationSchema={Yup.object({
        email: Yup.string().required("Email required").email(),
        password: Yup.string().required("password required").min(6),
      })}
    >
      <div className="flex h-screen">
        <div className="loginBox">
          <h2>Create account</h2>
          <Form>
            <p>Email</p>
            <Field
              type="text"
              name="email"
              placeholder="Enter Email"
              autocomplete="off"
            />
            <ErrorMessage name="email" />
            <p>Password</p>
            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
              autocomplete="off"
            />
            <ErrorMessage name="email" />
            <button type="submit" className="btn">
              {isLoading ? (
                <i className="fas fa-circle-notch fa-spin"></i>
              ) : (
                "SignUp"
              )}
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
}
