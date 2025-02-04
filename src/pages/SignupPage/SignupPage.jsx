import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/auth/operations.js";
// import { toast } from "react-hot-toast";
import AuthForm from "../../components/ui/AuthForm/AuthForm.jsx";
import css from "./SignupPage.module.css";

const SignupPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(signUp(values));

    actions.resetForm();
  };

  return (
    <section className={css.background}>
      <AuthForm title="Sign Up" type="signUp" onSubmit={handleSubmit} />
      <div className={css.bottle}></div>
    </section>
  );
};

export default SignupPage;
