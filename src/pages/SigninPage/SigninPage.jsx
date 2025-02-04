import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { signIn } from "../../redux/auth/operations.js";
// import { toast } from "react-hot-toast";
import AuthForm from "../../components/AuthForm/AuthForm";
import css from "./SigninPage.module.css";

const SigninPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = (values, actions) => {
    dispatch(signIn(values));

    actions.resetForm();
  };

  return (
    <section className={css.background}>
      <AuthForm title="Sign In" type="signIn" onSubmit={handleSubmit} />
      <div className={css.bottle}></div>
    </section>
  );
};

export default SigninPage;
