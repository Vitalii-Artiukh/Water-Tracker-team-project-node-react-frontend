import { Link } from "react-router-dom";
import css from "./Header.module.css";
import logo from "../../assets/images/logo/logo.png";
import Icon from "../ui/Icon";
import { useAuthSelector } from "../../hooks/useAuthSelector";

import { useState } from "react";

const Header = () => {
  const { isLoggedIn, user } = useAuthSelector();
  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <header className={css.header}>
      <Link to="/" className={css.logo}>
        <img src={logo} alt="logo" width={40} height={48} />
        <p className={css.text}>Tracker of water</p>
      </Link>
      {isLoggedIn ? (
        <>
          <div className={css.userInfo}>
            <p>{user?.name}</p>
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="User photo" />
            ) : (
              <div className={css.avatarPlaceholder}>
                {user?.email?.charAt(0).toUpperCase() ||
                  user?.name?.charAt(0).toUpperCase()}
              </div>
            )}
            <button
              onClick={toggleDropdown}
              className={css.button}
              type="button"
            >
              <Icon
                name="icon-chevron-down"
                fill="#407bff"
                stroke="#407bff"
                width={28}
                height={28}
              ></Icon>
            </button>
          </div>
          {isOpen && (
            <ul className={css.dropDownMenu}>
              <li className={css.dropDownItem}>
                <Icon
                  name="icon-settings"
                  fill="transparent"
                  stroke="#407bff"
                  width={16}
                  height={16}
                ></Icon>
                <Link to="/" className={css.dropDownText}>
                  Setting
                </Link>
              </li>
              <li className={css.dropDownItem}>
                <Icon
                  name="icon-logout"
                  fill="transparent"
                  stroke="#407bff"
                  width={16}
                  height={16}
                ></Icon>
                <Link to="/" className={css.dropDownText}>
                  Log out
                </Link>
              </li>
            </ul>
          )}
        </>
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
