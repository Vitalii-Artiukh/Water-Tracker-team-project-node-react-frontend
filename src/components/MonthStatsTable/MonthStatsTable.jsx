import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useWaterSelector } from "../../hooks/useWaterSelector";
import MonthStatsList from "../MonthStatsList/MonthStatsList";
import MonthStatsBar from "../MonthStatsBar/MonthStatsBar";
import { waterOperations } from "../../redux";
import css from "./MonthStatsTable.module.css";

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const MonthStatsTable = () => {
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    cords: null,
    currentElHeight: null,
    currentElWidth: null,
    listCords: null,
    currentDay: null,
  });

  const dispatch = useDispatch();
  const { monthStats } = useWaterSelector();

  const getCurrentMonth = useCallback(
    () => year.toString() + "-" + month?.toString().padStart(2, 0),
    [year, month]
  );

  useEffect(() => {
    dispatch(waterOperations.fetchWaterMonthStats(getCurrentMonth()));
  }, [dispatch, getCurrentMonth]);

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
        monthStats={monthStats}
        modalData={modalData}
        setModalData={setModalData}
        setIsShowModal={setIsShowModal}
        getCurrentMonth={getCurrentMonth}
      />
    </div>
  );
};

export default MonthStatsTable;
