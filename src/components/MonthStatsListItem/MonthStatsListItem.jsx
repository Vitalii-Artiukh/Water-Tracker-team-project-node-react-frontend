import css from "./MonthStatsListItem.module.css";

const MonthStatsListItem = ({ day, onShowModal }) => {
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.box} onClick={onShowModal}>
          {day}
        </div>
        <span className={css.text}>100%</span>
      </div>
    </>
  );
};

export default MonthStatsListItem;
