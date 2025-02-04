// import { ErrorMessage, Field, Form, Formik } from "formik";
// import { LoginUserSchema } from "../../utilits/formSchema";

// import css from "./SigninPage.module.css";
// import { useDispatch } from "react-redux";
// import { signIn } from "../../redux/auth/operations";
// import { Link } from "react-router-dom";

// import bottleMobileImage1x from "../../assets/images/signin/bottle_signin_mobile_1x.png";
// import bottleMobileImage2x from "../../assets/images/signin/bottle_signin_mobile_2x.png";

// import botteTabletImage1x from "../../assets/images/signin/bottle_signin_tablet_1x.png";
// import botteTabletImage2x from "../../assets/images/signin/bottle_signin_tablet_2x.png";
// import bottleDesktopImage1x from "../../assets/images/signin/bottle_signin_desktop_1x.png";
// import bottleDesktopImage2x from "../../assets/images/signin/bottle_signin_desktop_2x.png";

// const SigninPage = () => {
//   const INITAL_VALUE = {
//     email: "",
//     password: "",
//   };
//   const dispatch = useDispatch();

//   const handleSubmit = (values, actions) => {
//     dispatch(signIn(values));

//     actions.resetForm();
//   };

//   return (
//     <div className={css.container}>
//       <div className={css.formComponent}>
//         <h3 className={css.title}>Sign In</h3>
//         <Formik
//           initialValues={INITAL_VALUE}
//           onSubmit={handleSubmit}
//           validationSchema={LoginUserSchema}
//         >
//           <Form className={css.form}>
//             <span className={css.spanText}>Enter your email</span>
//             <Field
//               placeholder="Email"
//               className={css.input}
//               type="text"
//               name="email"
//             ></Field>
//             <ErrorMessage
//               className={css.errorMess}
//               name="email"
//               component="span"
//             />
//             <span className={css.spanText}>Enter your password</span>
//             <Field
//               placeholder="Password"
//               className={css.input}
//               type="password"
//               name="password"
//             ></Field>
//             <ErrorMessage
//               className={css.errorMess}
//               name="password"
//               component="span"
//             />

//             <button className={css.submit} type="submit">
//               Sign In
//             </button>
//           </Form>
//         </Formik>
//         <Link to="/signup" className={css.signUp}>
//           Sign up
//         </Link>
//       </div>
//       <picture>
//         <source
//           srcSet={`${bottleDesktopImage1x} 1x, ${bottleDesktopImage2x} 2x`}
//           media="(min-width: 1024px)"
//         />
//         <source
//           srcSet={`${botteTabletImage1x} 1x, ${botteTabletImage2x} 2x`}
//           media="(min-width: 768px)"
//         />
//         <img
//           className={css.image}
//           src={bottleMobileImage1x}
//           srcSet={`${bottleMobileImage1x} 1x, ${bottleMobileImage2x} 2x`}
//           alt="bottle"
//         />
//       </picture>
//     </div>
//   );
// };

// export default SigninPage;
