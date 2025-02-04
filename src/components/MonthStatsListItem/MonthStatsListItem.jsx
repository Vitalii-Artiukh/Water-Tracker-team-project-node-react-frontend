import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats";
import css from "./MonthStatsListItem.module.css";

const MonthStatsListItem = ({
  day,
  onShowModal,
  isOpen,
  modalData,
  onCLoseModal,
}) => {
  const { currentDay } = modalData;
  return (
    <>
      <div className={css.wrapper}>
        <div className={css.box} onClick={onShowModal}>
          {day}
        </div>
        <span className={css.text}>100%</span>

        {currentDay === day && (
          <DaysGeneralStats
            isOpen={isOpen}
            modalData={modalData}
            onCLoseModal={onCLoseModal}
          />
        )}
      </div>
    </>
  );
};

export default MonthStatsListItem;
