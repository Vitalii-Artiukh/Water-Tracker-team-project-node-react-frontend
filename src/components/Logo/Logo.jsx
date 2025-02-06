import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link to="/welcome" className={css.logo}>
        <svg width={40} height={48}>
          <use href="/logo.svg#icon-logo"></use>
        </svg>
        <p className={css.textLogo}>Tracker of water</p>
      </Link>
    </div>
  );
};

export default Logo;
