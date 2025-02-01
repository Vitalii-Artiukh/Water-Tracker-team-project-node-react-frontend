import MonthStatsButton from "../MonthStatsButton/MonthStatsButton";
import css from "./MonthStatsBar.module.css";

const months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const MonthStatsBar = ({
  currentMonth,
  currentYear,
  month,
  year,
  prevMonth,
  nextMonth,
}) => {
  return (
    <div className={css.dateBar}>
      <h3 className={css.subtitle}>Month</h3>
      <div className={css.navPanel}>
        <MonthStatsButton rotate={"rotate(90deg)"} handleClick={prevMonth} />
        <span className={css.spanText}>
          {months[month]}, {year}
        </span>
        {!(month === currentMonth && year === currentYear) && (
          <MonthStatsButton rotate={"rotate(-90deg)"} handleClick={nextMonth} />
        )}
      </div>
    </div>
  );
};

export default MonthStatsBar;
