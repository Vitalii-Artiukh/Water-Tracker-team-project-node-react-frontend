import { Link } from "react-router-dom";
import Icon from "../ui/Icon";
import css from "./UsserAuth.module.css";

const UserAuth = () => {
  return (
    <div className={css.userInfo}>
      <Link to="/signin" className={css.signIn}>
        Sign in
      </Link>
      <Icon
        name="icon-user"
        fill="transparent"
        stroke="currentColor"
        width={28}
        height={28}
      ></Icon>
    </div>
  );
};

export default UserAuth;
