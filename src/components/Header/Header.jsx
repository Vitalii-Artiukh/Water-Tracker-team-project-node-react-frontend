import css from './Header.module.css';
import { useAuthSelector } from '../../hooks/useAuthSelector';
import Container from '../ui/Container/Container';

import { useState } from 'react';
import Logo from '../Logo/Logo';
import UserAuth from '../UserAuth/UserAuth';
import UserLogo from '../UserLogo/UserLogo';
import UserLogoModal from '../UserLogoModal/UserLogoModal';

const Header = () => {
  const { isLoggedIn } = useAuthSelector();
  const [isOpenUserModal, setIsOpenUserModal] = useState(false);

  const toggleDropdown = () => {
    setIsOpenUserModal((prev) => !prev);
  };
  return (
    <Container>
      <header className={css.header}>
        <Logo />
        {isLoggedIn ? (
          <div className={css.userFullInfo}>
            <UserLogo
              toggleDropdown={toggleDropdown}
              isOpenUserModal={isOpenUserModal}
            ></UserLogo>
            {isOpenUserModal && (
              <UserLogoModal setIsOpenUserModal={setIsOpenUserModal} />
            )}
          </div>
        ) : (
          <UserAuth />
        )}
      </header>
    </Container>
  );
};

export default Header;
