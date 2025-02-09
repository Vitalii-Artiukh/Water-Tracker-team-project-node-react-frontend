import clsx from "clsx";
import css from "./MonthStatsListItem.module.css";

const MonthStatsListItem = ({
  day,
  getDayWithStats,
  onShowModal,
  getCurrentMonth,
}) => {
  const stats = getDayWithStats(day);
  const isCurrentDay =
    new Date().toISOString().split("T")[0] ===
    getCurrentMonth() + "-" + day.toString().padStart(2, 0);

  return (
    <>
      <div className={css.wrapper}>
        <div
          className={clsx(
            css.box,
            parseInt(stats[0]?.percentage) < 100 &&
              stats?.length > 0 &&
              css.alterBoxBorder,
            parseInt(stats[0]?.percentage) >= 100 && css.completeBoxBorder,
            isCurrentDay && css.currentDay
          )}
          onClick={onShowModal}
        >
          {day}
        </div>
        <span className={css.text}>
          {stats?.length > 0 ? stats[0].percentage : "0%"}
        </span>
      </div>
    </>
  );
};

export default MonthStatsListItem;
