import { useAuthSelector } from '../../hooks/useAuthSelector';
import Icon from '../ui/Icon';
import css from './UserLogo.module.css';
import clsx from 'clsx';

const UserLogo = ({ toggleDropdown, isOpenUserModal }) => {
  const { user } = useAuthSelector();

  return (
    <div className={css.userInfo}>
      <button
        onClick={toggleDropdown}
        className={clsx(css.buttonDropDownMenu, 'userLogoButton', {
          [css.open]: isOpenUserModal,
        })}
        type="button"
      >
        <p className={css.userName}>
          {user?.name || user?.email.split('@')[0]}
        </p>

        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            className={css.userAvatar}
            alt="User avatar"
          />
        ) : (
          <p className={css.avatarPlaceholder}>
            {user?.name?.charAt(0).toUpperCase() ||
              user?.email?.charAt(0).toUpperCase()}
          </p>
        )}

        <Icon
          name="icon-chevron-down"
          fill="#407bff"
          stroke="transperent"
          width={21}
          height={21}
        ></Icon>
      </button>
    </div>
  );
};

export default UserLogo;
