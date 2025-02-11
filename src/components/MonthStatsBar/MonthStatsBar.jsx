import MonthStatsButton from "../MonthStatsButton/MonthStatsButton";
import css from "./MonthStatsBar.module.css";
import { months } from "../../constants";

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
        <MonthStatsButton rotate={"rotate(0deg)"} handleClick={prevMonth} />
        <span className={css.spanText}>
          {months[month]}, {year}
        </span>
        {!(month === currentMonth && year === currentYear) && (
          <MonthStatsButton
            rotate={"rotate(-180deg)"}
            handleClick={nextMonth}
          />
        )}
      </div>
    </div>
  );
};

export default MonthStatsBar;
