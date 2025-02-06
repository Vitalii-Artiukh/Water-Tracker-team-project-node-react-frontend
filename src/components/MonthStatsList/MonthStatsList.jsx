import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats";
import MonthStatsListItem from "../MonthStatsListItem/MonthStatsListItem";
import css from "./MonthStatsList.module.css";

const MonthStatsList = ({
  days,
  isOpen,
  modalData,
  setIsShowModal,
  setModalData,
}) => {
  const onShowModal = (e) => {
    const el = e.target;
    const elHeight = el.closest("li").offsetHeight;
    const listWidth = el.closest("ul").offsetWidth;
    const cords = el.getBoundingClientRect();
    const currentDay = Number(el.childNodes[0].data);

    setIsShowModal(true);

    setModalData({
      ...modalData,
      cords: cords,
      listWidth: listWidth,
      currentElHeight: elHeight,
      currentDay: currentDay,
    });
  };

  return (
    <>
      <ul className={css.list}>
        {days.map((day) => (
          <li key={day} className={css.listItem}>
            <MonthStatsListItem day={day} onShowModal={onShowModal} />
          </li>
        ))}
      </ul>
      {isOpen && (
        <DaysGeneralStats
          isOpen={isOpen}
          modalData={modalData}
          // onCloseModal={onCloseModal}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  );
};

export default MonthStatsList;
