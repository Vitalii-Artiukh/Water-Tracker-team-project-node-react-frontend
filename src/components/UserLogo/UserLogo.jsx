import { useAuthSelector } from '../../hooks/useAuthSelector';
import Icon from '../ui/Icon';
import css from './UserLogo.module.css';

const UserLogo = ({ toggleDropdown }) => {
  const { user } = useAuthSelector();

  return (
    <div className={css.userInfo}>
      {user.name !== null ? <p>{user.name}</p> : <p>{user.email}</p>}
      {user.avatarUrl ? (
        <img src={user.avatarUrl} alt="User photo" />
      ) : (
        <div className={css.avatarPlaceholder}>
          {user?.name?.charAt(0).toUpperCase() ||
            user?.email?.charAt(0).toUpperCase()}
        </div>
      )}
      <button onClick={toggleDropdown} className={css.button} type="button">
        <Icon
          name="icon-chevron-down"
          fill="#407bff"
          stroke="#407bff"
          width={28}
          height={28}
        ></Icon>
      </button>
    </div>
  );
};

export default UserLogo;
