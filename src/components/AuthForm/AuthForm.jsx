import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../ui/Button/Button.jsx";
import Icon from "../ui/Icon";
import css from "./AuthForm.module.css";

const validationSchemas = {
  signUp: Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password length must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
  }),
  signIn: Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
};

const initialValues = {
  signUp: { email: "", password: "", confirmPassword: "" },
  signIn: { email: "", password: "" },
};

const AuthForm = ({ onSubmit, title, type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Formik
      initialValues={initialValues[type]}
      validationSchema={validationSchemas[type]}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={css.form}>
          <h2 className={css.title}>{title}</h2>

          <label className={css.label}>
            <span>Enter your email</span>
            <Field
              type="text"
              name="email"
              className={`${css.input} ${
                errors.email && touched.email ? css.inputError : ""
              }`}
              placeholder="E-mail"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="email"
              component="span"
            />
          </label>

          <label className={css.label}>
            <span>Enter your password</span>
            <div className={css.passwordField}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className={`${css.input} ${
                  errors.password && touched.password ? css.inputError : ""
                }`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className={css.eyeButton}
              >
                <Icon
                  name={showPassword ? "icon-eye" : "icon-eye-slash"}
                  width={16}
                  height={16}
                />
              </button>
            </div>
            <ErrorMessage
              className={css.errorMessage}
              name="password"
              component="span"
            />
          </label>

          {type === "signUp" && (
            <label className={css.label}>
              <span>Repeat password</span>
              <div className={css.passwordField}>
                <Field
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  className={`${css.input} ${
                    errors.confirmPassword && touched.confirmPassword
                      ? css.inputError
                      : ""
                  }`}
                  placeholder="Repeat password"
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className={css.eyeButton}
                >
                  <Icon
                    name={showConfirmPassword ? "icon-eye" : "icon-eye-slash"}
                    width={16}
                    height={16}
                  />
                </button>
              </div>
              <ErrorMessage
                className={css.errorMessage}
                name="confirmPassword"
                component="span"
              />
            </label>
          )}

          <Button type="submit" width="100%" disabled={isSubmitting}>
            {title}
          </Button>
          <div>
            {type === "signUp" ? (
              <Link to="/signin" className={css.link}>
                Sign in
              </Link>
            ) : (
              <Link to="/signup" className={css.link}>
                Sign up
              </Link>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
