import clsx from "clsx";

import styles from "./app-button.module.css";

const AppButton = ({ type = "submit", className, children }) => {
  return (
    <button type={type} className={clsx(styles.btn, className)}>
      {children}
    </button>
  );
};
export default AppButton;
