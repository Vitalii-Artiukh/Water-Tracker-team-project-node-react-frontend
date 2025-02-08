import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/auth/operations.js';
import AuthForm from '../../components/AuthForm/AuthForm';
import toast from 'react-hot-toast';

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    const { confirmPassword, ...formData } = values;

    try {
      await dispatch(signUp(formData)).unwrap();
      toast.success('Registration successful!');
    } catch (error) {
      toast.error(`Registration failed: ${error}`);
    }
  };

  return <AuthForm title="Sign Up" type="signUp" onSubmit={handleSubmit} />;
};

export default SignupPage;
