// import { useDispatch } from "react-redux";
import css from "./DailyNorma.module.css";
import { useAuthSelector } from "../../hooks/useAuthSelector";
import { selectUserDailyNorm } from "../../redux/auth/selectors";
import ModalContainer from "../ui/ModalContainer/ModalContainer";

const DailyNorma = ({onOpen, isOpen, onClose}) => {
  // const dispatch = useDispatch();
  const {dailyNorm} = useAuthSelector(selectUserDailyNorm);

  const correctDailyNorm = dailyNorm / 1000;
  console.log('dailyNorm: ', dailyNorm);

  return (
    <div className={css.dailyNormaContainer}>
      <h3 className={css.title}>My daily norma</h3>
      <div className={css.dailyNormaValue}>
        <p className={css.text}>{dailyNorm ? `${correctDailyNorm} L` : '2.0 L'}</p>
        <button
          className={css.btn}
          type="button"
          onClick={onOpen}
        >
          Edit
        </button>
      </div>
      {isOpen && <ModalContainer isOpen={isOpen} onClose={onClose} />}
    </div>
  );
};

export default DailyNorma;
