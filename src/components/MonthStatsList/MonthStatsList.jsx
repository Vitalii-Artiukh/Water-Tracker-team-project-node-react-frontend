import MonthStatsListItem from "../MonthStatsListItem/MonthStatsListItem";
import css from "./MonthStatsList.module.css";

const MonthStatsList = ({ days, onShowModal }) => {
  return (
    <ul className={css.list}>
      {days.map((day) => (
        <li key={day}>
          <MonthStatsListItem day={day} onShowModal={onShowModal} />
        </li>
      ))}
    </ul>
  );
};

export default MonthStatsList;
