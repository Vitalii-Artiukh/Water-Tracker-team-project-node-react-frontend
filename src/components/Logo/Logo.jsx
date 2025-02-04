import { Link } from 'react-router-dom';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      {' '}
      <Link to="/" className={css.logo}>
        <svg width={40} height={48}>
          <use href="/logo.svg#icon-logo"></use>
        </svg>
        <p className={css.text}>Tracker of water</p>
      </Link>
    </div>
  );
};

export default Logo;
