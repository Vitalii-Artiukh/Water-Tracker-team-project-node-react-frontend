import { useAuthSelector } from '../../hooks/useAuthSelector.js';
import css from './DailyNorma.module.css';

const DailyNorma = ({ openModal }) => {
  const { user } = useAuthSelector();
  return (
    <div className={css.dailyNormaContainer}>
      <h3 className={css.title}>My daily norma</h3>
      <div className={css.dailyNormaValue}>
        <p className={css.text}>{user.dailyNorm / 1000 || 'N/A'} L</p>
        <button className={css.btn} type="button" onClick={openModal}>
          Edit
        </button>
      </div>
      {/* {isOpen && <ModalContainer isOpen={isOpen} onClose={onClose} />} */}
    </div>
  );
};

export default DailyNorma;
