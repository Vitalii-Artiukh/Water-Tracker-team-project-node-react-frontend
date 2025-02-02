import css from "./SettingModal.module.css";
import Icon from "../../ui/Icon";
import UpdateAvatar from "./UpdateAvatar";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../../redux/auth/operations";
import toast, { Toaster } from "react-hot-toast";

const updateUserValidationSchema = yup.object().shape({
  gender: yup
    .string()
    .oneOf(["male", "female"], "Gender must be either 'male' or 'female'")
    .required("Gender is required"),
  name: yup.string().min(3, "Min length 3").max(32, "Max length 32"),
  email: yup.string().email("Enter a valid email"),
  oldPassword: yup.string().min(8, "Min length 8").max(64, "Max length 64"),
  newPassword: yup.string().min(8, "Min length 8").max(64, "Max length 64"),
  repeatPassword: yup
    .string()
    .min(8, "Min length 8")
    .max(64, "Max length 64")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

const SettingModal = ({ onClose, isOpen }) => {
  // const userProfile = useSelector(updateUserData);
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    gender: "",
    name: "",
    email: "",
    // gender: userProfile.gender,
    // name: userProfile.userName,
    // email: userProfile.email,
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  };

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(
      updateUserData({
        gender: values.gender,
        userName: values.name,
        email: values.email,
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      })
    )
      .unwrap()
      .then(() => {
        console.log("update user - success");
      })
      .catch(() => {
        console.log("update user - error");
        toast.error("Something is invalid !");
      });
    actions.resetForm();
  };

  if (!isOpen) return null;

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.settingModal}>
        {/* settingTitle & closeBtn */}
        <div className={css.modalTitle}>
          <h2 className={css.title}>Setting</h2>
          <button className={css.closeBtn} onClick={onClose}>
            <img
              src="/src/assets/images/closeBtn.png"
              alt="closeBtn"
              width="12px"
              height="12px"
            />
          </button>
        </div>
        {/* updateUserPhoto */}
        <UpdateAvatar />
        {/* updateUserData & passwordСhange */}
        <Formik
          validationSchema={updateUserValidationSchema}
          initialValues={INITIAL_VALUES}
          onSubmit={handleSubmit}>
          <Form>
            <div className={css.containerForm}>
              {/* updateUserData */}
              <div className={css.containerFormOne}>
                <div>
                  <h3 className={css.fontOne}>Your gender identity</h3>
                  <div className={css.radioContainer}>
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
                      className={css.input}
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
                      className={css.input}
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
              <div className={css.containerFormTwo}>
                <h3 className={css.fontOne}>Password</h3>
                <div>
                  <h4 className={css.fontTwo}>Outdated password:</h4>
                  <label>
                    <Field
                      className={css.input}
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
                        <Icon
                          name="icon-eye-slash"
                          width="16px"
                          height="16px"
                        />
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
                      className={css.input}
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
                        <Icon
                          name="icon-eye-slash"
                          width="16px"
                          height="16px"
                        />
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
                      className={css.input}
                      type={showRepeatPassword ? "text" : "password"}
                      name="repeatPassword"
                      placeholder="Password"
                    />
                    <span
                      className={css.eye}
                      onClick={() =>
                        setShowRepeatPassword(!showRepeatPassword)
                      }>
                      {showRepeatPassword ? (
                        <Icon name="icon-eye" width="16px" height="16px" />
                      ) : (
                        <Icon
                          name="icon-eye-slash"
                          width="16px"
                          height="16px"
                        />
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
            </div>
          </Form>
        </Formik>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default SettingModal;
