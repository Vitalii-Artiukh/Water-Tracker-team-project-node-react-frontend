import Icon from "../ui/Icon";
import css from "./UserLogoModal.module.css";

const UserLogoModal = () => {
  return (
    <ul className={css.dropDownMenu}>
      <li className={css.dropDownItem}>
        <button type="button" className={css.dropDownText}>
          <Icon
            name="icon-settings"
            fill="transparent"
            stroke="#407bff"
            width={16}
            height={16}
          ></Icon>
          Setting
        </button>
      </li>
      <li className={css.dropDownItem}>
        <button type="button" className={css.dropDownText}>
          <Icon
            name="icon-logout"
            fill="transparent"
            stroke="#407bff"
            width={16}
            height={16}
          ></Icon>
          Log out
        </button>
      </li>
    </ul>
  );
};

export default UserLogoModal;
