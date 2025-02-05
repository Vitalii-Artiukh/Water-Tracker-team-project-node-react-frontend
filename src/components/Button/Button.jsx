import clsx from "clsx";

import styles from "./button.module.css";

const Button = ({ type = "submit", className, children }) => {
  return (
    <button type={type} className={clsx(styles.btn, className)}>
      {children}
    </button>
  );
};
export default Button;
