import MonthStatsTable from "../MonthStatsTable/MonthStatsTable";
import TodayWaterList from "../TodayWaterList/TodayWaterList";
import css from "./StatsWrapper.module.css";

const StatsWrapper = ({ dailyRecords }) => {
  return (
    <div className={css.container}>
      <TodayWaterList dailyRecords={dailyRecords} />
      <MonthStatsTable />
    </div>
  );
};

export default StatsWrapper;
