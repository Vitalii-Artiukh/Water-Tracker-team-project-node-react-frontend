import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations.js';
import AuthForm from '../../components/AuthForm/AuthForm';

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(signUp(values));

    actions.resetForm();
  };

  return <AuthForm title="Sign Up" type="signUp" onSubmit={handleSubmit} />;
};

export default SignupPage;
