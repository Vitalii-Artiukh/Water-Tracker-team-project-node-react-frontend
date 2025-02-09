import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations.js';
import AuthForm from '../../components/AuthForm/AuthForm';

const SigninPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(signIn(values));
  };

  return <AuthForm title="Sign In" type="signIn" onSubmit={handleSubmit} />;
};

export default SigninPage;
