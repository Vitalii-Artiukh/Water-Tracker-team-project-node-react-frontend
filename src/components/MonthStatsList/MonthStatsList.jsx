import MonthStatsListItem from "../MonthStatsListItem/MonthStatsListItem";
import css from "./MonthStatsList.module.css";

const MonthStatsList = ({
  days,
  onShowModal,
  modalData,
  isOpen,
  onCLoseModal,
}) => {
  return (
    <ul className={css.list}>
      {days.map((day) => (
        <li key={day} className={css.listItem}>
          <MonthStatsListItem
            day={day}
            onShowModal={onShowModal}
            modalData={modalData}
            isOpen={isOpen}
            onCLoseModal={onCLoseModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default MonthStatsList;
