import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/operations.js';
import AuthForm from '../../components/AuthForm/AuthForm';
import toast from 'react-hot-toast';

const SigninPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    try {
      await dispatch(signIn(values)).unwrap();
      toast.success('Login successful!');
    } catch (error) {
      toast.error(`Login failed: ${error}`);
    }
  };

  return <AuthForm title="Sign In" type="signIn" onSubmit={handleSubmit} />;
};

export default SigninPage;
