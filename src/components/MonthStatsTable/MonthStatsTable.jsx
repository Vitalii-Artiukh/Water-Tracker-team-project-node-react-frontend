import { useState } from "react";
import css from "./MonthStatsTable.module.css";
import MonthStatsList from "../MonthStatsList/MonthStatsList";
import MonthStatsBar from "../MonthStatsBar/MonthStatsBar";
import DailyStatsWaterPopup from "../DailyStatsWaterPopup/DailyStatsWaterPopup";

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const MonthStatsTable = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [isShowModal, setIsShowModal] = useState(false);
  const [cords, setCords] = useState("");

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
    setIsShowModal(true);
    const elem = e.target;
    console.log(elem.closest("#closest").offsetHeight);
    let cords = elem.getBoundingClientRect();
    setCords(cords);

    // const filteredImage = images.filter(
    //   ({ urls: { small } }) => e.target.src === small
    // );
    // setModalData(filteredImage[0]);
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
      />
      <DailyStatsWaterPopup
        isOpen={isShowModal}
        closeModal={onCloseModal}
        cords={cords}
        // modalData={modalData}
      />
    </div>
  );
};

export default MonthStatsTable;
