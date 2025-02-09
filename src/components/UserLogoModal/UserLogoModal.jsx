import { useEffect, useRef, useState } from 'react';
import Icon from '../ui/Icon';
import css from './UserLogoModal.module.css';
import UserLogoutModal from '../UserLogoutModal/UserLogoutModal';
import SettingModal from '../SettingModal/SettingModal';

const UserLogoModal = ({ setIsOpenUserModal }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !isSettingModalOpen &&
        !isLogoutModalOpen
      ) {
        setIsOpenUserModal(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsOpenUserModal, isSettingModalOpen, isLogoutModalOpen]);

  return (
    <>
      <ul className={css.dropDownMenu} ref={modalRef}>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsSettingModalOpen(true);
            }}
            className={css.dropDownButton}
          >
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
            onClick={(e) => {
              e.stopPropagation();
              setIsLogoutModalOpen(true);
            }}
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
          onClose={() => {
            setIsLogoutModalOpen(false);
          }}
        />
      )}
      {isSettingModalOpen && (
        <SettingModal
          isOpen={isSettingModalOpen}
          onClose={() => {
            setIsSettingModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default UserLogoModal;
