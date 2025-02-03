import css from "./SettingModal.module.css";
import * as yup from "yup";
import Icon from "../../ui/Icon";
import toast, { Toaster } from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../../redux/auth/operations";
import UpdateAvatar from "./UpdateAvatar";

const updateUserValidationSchema = yup.object().shape({
  gender: yup
    .string()
    .oneOf(["male", "female"], "Gender must be either 'male' or 'female'")
    .required("Gender is required"),
  name: yup.string().min(3, "Min length 3").max(32, "Max length 32"),
  email: yup.string().email("Enter a valid email"),
  oldPassword: yup
    .string()
    .min(8, "Min length 8")
    .max(64, "Max length 64")
    .when("newPassword", (newPassword, field) =>
      newPassword[0] ? field.required("Old password is required") : field
    ),
  newPassword: yup
    .string()
    .min(8, "Min length 8")
    .max(64, "Max length 64")
    .test(
      "differentPassword",
      "New password must be different from the old one",
      function (value) {
        const oldPassword = this.resolve(yup.ref("oldPassword"));
        return !oldPassword || value !== oldPassword;
      }
    ),
  repeatPassword: yup
    .string()
    .min(8, "Min length 8")
    .max(64, "Max length 64")
    .test("commonPassword", "Passwords must match", function (value) {
      const newPassword = this.resolve(yup.ref("newPassword"));
      return !newPassword || String(value) === String(newPassword);
    }),
});

const SettingModal = ({ onClose }) => {
  // const userProfile = useSelector(updateUserData);
  const dispatch = useDispatch();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [userProfile] = useState({
    name: "Andrii",
    email: "m9ta@gmail.com",
    gender: "male",
    dailyNorm: "",
    avatarUrl: "",
  });
  console.log(userProfile);

  const INITIAL_VALUES = {
    gender: userProfile.gender,
    name: userProfile.name,
    email: userProfile.email,
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(
      updateUserData({
        name: values.name,
        email: values.email,
        gender: values.gender,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      })
    )
      .unwrap()
      .then(() => {
        actions.resetForm();
        onClose();
        console.log("Update user - success !");
      })
      .catch(() => {
        console.log("Update user - error !");
        toast.error("Something is invalid !");
      });
  };

  return (
    <div className={css.modalWrapper}>
      <div className={css.modalTitle}>
        <h2 className={css.title}>Setting</h2>
        <button className={css.closeBtn} onClick={onClose}>
          <img
            src="/src/assets/images/settingCloseBtn.png"
            alt="button"
            width="12px"
            height="12px"
          />
        </button>
      </div>
      <UpdateAvatar />
      <Formik
        validationSchema={updateUserValidationSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className={css.formWrapper}>
            {/* updateUserData */}
            <div className={css.formOneWrapper}>
              <div>
                <h3 className={css.fontOne}>Your gender identity</h3>
                <div className={css.radio}>
                  <div>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        style={{ cursor: "pointer" }}
                      />
                      <span
                        style={{ marginLeft: "8px" }}
                        className={css.fontTwo}>
                        Woman
                      </span>
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        style={{ marginLeft: "24px", cursor: "pointer" }}
                      />
                      <span
                        style={{ marginLeft: "8px" }}
                        className={css.fontTwo}>
                        Man
                      </span>
                    </label>
                  </div>
                  <ErrorMessage
                    className={css.errorMessage}
                    name="gender"
                    component="span"
                  />
                </div>
              </div>
              <div className={css.yourName}>
                <h3 className={css.fontOne}>Your name</h3>
                <label>
                  <Field
                    className={`${css.input} ${
                      errors.name && touched.name ? css.inputError : ""
                    }`}
                    type="text"
                    name="name"
                    placeholder="name"
                  />
                </label>
                <ErrorMessage
                  className={css.errorMessage}
                  name="name"
                  component="span"
                />
              </div>
              <div>
                <h3 className={css.fontOne}>E-mail</h3>
                <label>
                  <Field
                    className={`${css.input} ${
                      errors.email && touched.email ? css.inputError : ""
                    }`}
                    type="text"
                    name="email"
                    placeholder="email"
                  />
                </label>
                <ErrorMessage
                  className={css.errorMessage}
                  name="email"
                  component="span"
                />
              </div>
            </div>
            {/* passwordСhange */}
            <div className={css.formTwoWrapper}>
              <h3 className={css.fontOne}>Password</h3>
              <div>
                <h4 className={css.fontTwo}>Outdated password:</h4>
                <label>
                  <Field
                    className={`${css.input} ${
                      errors.oldPassword && touched.oldPassword
                        ? css.inputError
                        : ""
                    }`}
                    type={showOldPassword ? "text" : "password"}
                    name="oldPassword"
                    placeholder="Password"
                  />
                  <span
                    className={css.eye}
                    onClick={() => setShowOldPassword(!showOldPassword)}>
                    {showOldPassword ? (
                      <Icon name="icon-eye" width="16px" height="16px" />
                    ) : (
                      <Icon name="icon-eye-slash" width="16px" height="16px" />
                    )}
                  </span>
                  <ErrorMessage
                    className={css.errorMessage}
                    name="oldPassword"
                    component="span"
                  />
                </label>
              </div>
              <div>
                <h4 className={css.fontTwo}>New Password:</h4>
                <label>
                  <Field
                    className={`${css.input} ${
                      errors.newPassword && touched.newPassword
                        ? css.inputError
                        : ""
                    }`}
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    placeholder="Password"
                  />
                  <span
                    className={css.eye}
                    onClick={() => setShowNewPassword(!showNewPassword)}>
                    {showNewPassword ? (
                      <Icon name="icon-eye" width="16px" height="16px" />
                    ) : (
                      <Icon name="icon-eye-slash" width="16px" height="16px" />
                    )}
                  </span>
                  <ErrorMessage
                    className={css.errorMessage}
                    name="newPassword"
                    component="span"
                  />
                </label>
              </div>
              <div>
                <h4 className={css.fontTwo}>Repeat new password:</h4>
                <label>
                  <Field
                    className={`${css.input} ${
                      errors.repeatPassword && touched.repeatPassword
                        ? css.inputError
                        : ""
                    }`}
                    type={showRepeatPassword ? "text" : "password"}
                    name="repeatPassword"
                    placeholder="Password"
                  />
                  <span
                    className={css.eye}
                    onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
                    {showRepeatPassword ? (
                      <Icon name="icon-eye" width="16px" height="16px" />
                    ) : (
                      <Icon name="icon-eye-slash" width="16px" height="16px" />
                    )}
                  </span>
                  <ErrorMessage
                    className={css.errorMessage}
                    name="repeatPassword"
                    component="span"
                  />
                </label>
              </div>
              <button className={css.saveBtn} type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SettingModal;
