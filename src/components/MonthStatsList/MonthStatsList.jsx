import MonthStatsListItem from "../MonthStatsListItem/MonthStatsListItem";
import css from "./MonthStatsList.module.css";

const MonthStatsList = ({ days }) => {
  return (
    <ul className={css.list}>
      {days.map((day) => (
        <li key={day}>
          <MonthStatsListItem day={day} />
        </li>
      ))}
    </ul>
  );
};

export default MonthStatsList;
