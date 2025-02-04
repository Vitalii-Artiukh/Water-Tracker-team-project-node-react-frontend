import { useState } from "react";
import css from "./MonthStatsTable.module.css";
import MonthStatsList from "../MonthStatsList/MonthStatsList";
import MonthStatsBar from "../MonthStatsBar/MonthStatsBar";

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const MonthStatsTable = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    cords: null,
    currentElWidth: null,
    currentElHeight: null,
    currentDay: null,
  });

  const numberOfDays = new Date(year, month, 0).getDate();
  const days = [...Array(numberOfDays).keys()].map((i) => i + 1);

  const nextMonth = () => {
    if (month === currentMonth && year === currentYear) return;

    if (month === 12) {
      setMonth(0);
      setYear((prevYear) => prevYear + 1);
    }

    setMonth((prev) => prev + 1);
  };

  const previousMonth = () => {
    if (month === 1) {
      setMonth((prevMonth) => prevMonth + 12);
      setYear((prevYear) => prevYear - 1);
    }
    setMonth((prev) => prev - 1);
  };

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

  const onCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className={css.container}>
      <MonthStatsBar
        currentMonth={currentMonth}
        currentYear={currentYear}
        month={month}
        year={year}
        prevMonth={previousMonth}
        nextMonth={nextMonth}
      />
      <MonthStatsList
        days={days}
        onShowModal={onShowModal}
        onCLoseModal={onCloseModal}
        modalData={modalData}
        isOpen={isShowModal}
      />
    </div>
  );
};

export default MonthStatsTable;
