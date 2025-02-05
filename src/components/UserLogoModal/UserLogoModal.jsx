import { useState } from 'react';
import Icon from '../ui/Icon';
import css from './UserLogoModal.module.css';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';

const UserLogoModal = () => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  return (
    <>
      <ul className={css.dropDownMenu}>
        <li>
          <button type="button" className={css.dropDownButton}>
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
        <li>
          <button
            type="button"
            onClick={openLogoutModal}
            className={css.dropDownButton}
          >
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
      {isLogoutModalOpen && (
        <UserLogoutModal
          isOpen={isLogoutModalOpen}
          onClose={closeLogoutModal}
        />
      )}
    </>
  );
};

export default UserLogoModal;
