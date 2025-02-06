import { useCallback, useEffect } from "react";
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
    const elWidth = el.closest("li").offsetWidth;
    const cords = el.getBoundingClientRect();
    const currentDay = Number(el.childNodes[0].data);

    setIsShowModal(true);

    setModalData({
      ...modalData,
      cords: cords,
      currentElWidth: elWidth,
      currentElHeight: elHeight,
      currentDay: currentDay,
    });
  };

  const onCloseModal = useCallback(() => {
    setIsShowModal(false);
  }, [setIsShowModal]);

  return (
    <>
      <ul className={css.list}>
        {days.map((day) => (
          <li key={day} className={css.listItem}>
            <MonthStatsListItem day={day} onShowModal={onShowModal} />
          </li>
        ))}
      </ul>
      <DaysGeneralStats
        isOpen={isOpen}
        modalData={modalData}
        onCloseModal={onCloseModal}
      />
    </>
  );
};

export default MonthStatsList;
