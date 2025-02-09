import MonthStatsTable from "../MonthStatsTable/MonthStatsTable";
import TodayWaterList from "../TodayWaterList/TodayWaterList";
import css from "./StatsWrapper.module.css";

const StatsWrapper = () => {
  return (
    <div className={css.container}>
      <TodayWaterList />
      <MonthStatsTable />
    </div>
  );
};

export default StatsWrapper;
