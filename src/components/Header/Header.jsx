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
  const [isOpen, setIsOpen] = useState();

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Container>
      <header className={css.header}>
        <Logo></Logo>
        {isLoggedIn ? (
          <>
            <UserLogo></UserLogo>
            {isOpen && (
              <UserLogoModal toggleDropdown={toggleDropdown}></UserLogoModal>
            )}
          </>
        ) : (
          <UserAuth></UserAuth>
        )}
      </header>
    </Container>
  );
};

export default Header;
