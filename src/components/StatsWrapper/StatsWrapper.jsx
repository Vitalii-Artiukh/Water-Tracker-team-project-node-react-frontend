import MonthStatsTable from "../MonthStatsTable/MonthStatsTable";
import TodayWaterList from "../TodayWaterList/TodayWaterList";
import css from "./StatsWrapper.module.css";

const StatsWrapper = ({ dailyRecords, openWaterModal, setWaterEntry }) => {
  return (
    <div className={css.container}>
      <TodayWaterList
        dailyRecords={dailyRecords}
        openWaterModal={openWaterModal}
        setWaterEntry={setWaterEntry}
      />
      <MonthStatsTable />
    </div>
  );
};

export default StatsWrapper;
