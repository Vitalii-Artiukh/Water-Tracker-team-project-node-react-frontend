import css from '../SettingModal/SettingModal.module.css';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import Icon from '../ui/Icon';
import ModalContainer from '../ui/ModalContainer/ModalContainer';
import Button from '../../components/ui/Button/Button';
import UpdateAvatar from '../SettingModal/UpdateAvatar';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/auth/operations';
import { useAuthSelector } from '../../hooks/useAuthSelector';

const updateUserValidationSchema = yup.object().shape({
  gender: yup.string().oneOf(['male', 'female']),
  name: yup.string().min(3, 'Min length 3').max(32, 'Max length 32'),
  email: yup.string().email('Enter a valid email'),
  oldPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .when('newPassword', (newPassword, field) =>
      newPassword[0] ? field.required('Old password is required') : field
    ),
  newPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .test(
      'differentPassword',
      'New password must be different from the old one',
      function (value) {
        const oldPassword = this.resolve(yup.ref('oldPassword'));
        return !oldPassword || value !== oldPassword;
      }
    ),
  repeatPassword: yup
    .string()
    .min(8, 'Min length 8')
    .max(64, 'Max length 64')
    .test('commonPassword', 'Passwords must match', function (value) {
      const newPassword = this.resolve(yup.ref('newPassword'));
      return !newPassword || String(value) === String(newPassword);
    }),
});

const SettingModal = ({ isOpen, onClose }) => {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const { user } = useAuthSelector();
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    gender: user.gender || '',
    name: user.name || '',
    email: user.email || '',
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
  };

  const handleSubmit = async values => {
    const updatedFields = {};

    if (values.name && values.name !== user.name) {
      updatedFields.name = values.name;
    }

    if (values.email && values.email !== user.email) {
      updatedFields.email = values.email;
    }

    if (values.gender && values.gender !== user.gender) {
      updatedFields.gender = values.gender;
    }

    if (values.newPassword && values.oldPassword) {
      updatedFields.password = values.oldPassword;
      updatedFields.newPassword = values.newPassword;
    } else if (values.newPassword || values.oldPassword) {
      return;
    }

    if (Object.keys(updatedFields).length === 0) {
      return;
    }

    try {
      await dispatch(updateUserData(updatedFields)).unwrap();
      onClose();
      toast.success('User data successfully updated!');
    } catch (error) {
      toast.error(error?.message || 'User data update error!');
    }
  };

  return (
    <ModalContainer
      overlayClassName={css.settingModalOverlay}
      className={css.settingModalWrapper}
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={css.titleWrapper}>
        <h2 className={css.title}>Setting</h2>
        <button className={css.btnClose} onClick={onClose}>
          <Icon name="icon-x-mark" width="24px" height="24px" />
        </button>
      </div>
      <UpdateAvatar />
      <Formik
        validationSchema={updateUserValidationSchema}
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className={css.formWrapper}>
              <div className={css.formUser}>
                <div className={css.radioFormWrapper}>
                  <h3 className={css.radio}>Your gender identity</h3>
                  <label>
                    <Field type="radio" name="gender" value="female" />
                    <span className={css.radioValue}>Woman</span>
                  </label>
                  <label>
                    <Field
                      style={{ marginLeft: '24px' }}
                      type="radio"
                      name="gender"
                      value="male"
                    />
                    <span className={css.radioValue}>Man</span>
                  </label>
                </div>
                <div>
                  <label className={css.labelUser}>
                    Your name
                    <Field
                      className={`${css.input} ${
                        errors.name && touched.name ? css.inputError : ''
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
                  <label className={css.labelUser}>
                    E-mail
                    <Field
                      className={`${css.input} ${
                        errors.email && touched.email ? css.inputError : ''
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
              <div className={css.formPassword}>
                <h3 className={css.fontOne}>Password</h3>
                <div>
                  <label className={css.labelPassword}>
                    Outdated password:
                    <Field
                      className={`${css.input} ${
                        errors.oldPassword && touched.oldPassword
                          ? css.inputError
                          : ''
                      }`}
                      type={showOldPassword ? 'text' : 'password'}
                      name="oldPassword"
                      placeholder="Password"
                    />
                    <span
                      className={css.eye}
                      onClick={() => setShowOldPassword(!showOldPassword)}
                    >
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
                  </label>
                  <ErrorMessage
                    className={css.errorMessage}
                    name="oldPassword"
                    component="span"
                  />
                </div>
                <div>
                  <label className={css.labelPassword}>
                    New Password:
                    <Field
                      className={`${css.input} ${
                        errors.newPassword && touched.newPassword
                          ? css.inputError
                          : ''
                      }`}
                      type={showNewPassword ? 'text' : 'password'}
                      name="newPassword"
                      placeholder="Password"
                    />
                    <span
                      className={css.eye}
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
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
                  </label>
                  <ErrorMessage
                    className={css.errorMessage}
                    name="newPassword"
                    component="span"
                  />
                </div>
                <div>
                  <label className={css.labelPassword}>
                    Repeat new password:
                    <Field
                      className={`${css.input} ${
                        errors.repeatPassword && touched.repeatPassword
                          ? css.inputError
                          : ''
                      }`}
                      type={showRepeatPassword ? 'text' : 'password'}
                      name="repeatPassword"
                      placeholder="Password"
                    />
                    <span
                      className={css.eye}
                      onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                    >
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
                  </label>
                  <ErrorMessage
                    className={css.errorMessage}
                    name="repeatPassword"
                    component="span"
                  />
                </div>
              </div>
            </div>
            <div className={css.btnSaveWrapper}>
              <Button variant="default" type="submit">
                Save
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default SettingModal;
