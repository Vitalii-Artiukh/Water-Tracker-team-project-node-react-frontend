import { useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/operations.js";
import AuthForm from "../../components/AuthForm/AuthForm";

const SignupPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    const { confirmPassword, ...formData } = values;

    console.log("Форма отправлена", formData);
    try {
      await dispatch(signUp(formData)).unwrap();
    } catch (error) {
      console.error("Ошибка регистрации:", error);
      alert(`Ошибка регистрации: ${error.message}`);
    }
  };

  return <AuthForm title="Sign Up" type="signUp" onSubmit={handleSubmit} />;
};

export default SignupPage;
