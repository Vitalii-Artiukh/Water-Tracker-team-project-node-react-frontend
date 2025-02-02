import { ErrorMessage, Field, Form, Formik } from "formik";
import { LoginUserSchema } from "../../utilits/formSchema";

import css from "./SigninPage.module.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const SigninPage = () => {
  const INITAL_VALUE = {
    email: "",
    password: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));

    console.log(values);

    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={INITAL_VALUE}
        onSubmit={handleSubmit}
        validationSchema={LoginUserSchema}
      >
        <Form className={css.form}>
          <span>Email:</span>
          <Field className={css.input} type="text" name="email"></Field>
          <ErrorMessage
            className={css.errorMess}
            name="email"
            component="span"
          />
          <span>Password:</span>
          <Field className={css.input} type="password" name="password"></Field>
          <ErrorMessage
            className={css.errorMess}
            name="password"
            component="span"
          />

          <button type="submit">Sign In</button>
        </Form>
      </Formik>
    </>
  );
};

export default SigninPage;
