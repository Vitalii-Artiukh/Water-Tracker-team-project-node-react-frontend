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
    listWidth: null,
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
        isOpen={isShowModal}
        modalData={modalData}
        setModalData={setModalData}
        setIsShowModal={setIsShowModal}
      />
    </div>
  );
};

export default MonthStatsTable;
