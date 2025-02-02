import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/logo/logo.png";
import Icon from "../ui/Icon";
import { useAuthSelector } from "../../hooks/useAuthSelector";

const Header = () => {
  const { isLoggedIn } = useAuthSelector();
  const { user } = useAuthSelector();
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <img src={logo} alt="logo" width={40} height={48} />
        <p className={css.text}>Tracker of water</p>
      </Link>
      {isLoggedIn ? (
        <div>
          <p>{user.name}</p>
          {user.avatarUrl ? (
            <img src="" alt="User photo" />
          ) : (
            <div className={css.avatarPlaceholder}>
              {user.email.charAt(0).toUpperCase()}
            </div>
          )}

          <Icon
            name="icon-chevron-down"
            fill="transparent"
            stroke="currentColor"
            width={28}
            height={28}
          ></Icon>
        </div>
      ) : (
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
      )}
    </header>
  );
};

export default Header;
