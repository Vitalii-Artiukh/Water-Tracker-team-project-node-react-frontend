import MonthStatsTable from "../MonthStatsTable/MonthStatsTable";
import TodayWaterList from "../TodayWaterList/TodayWaterList";
import css from "./StatsWrapper.module.css";

const StatsWrapper = ({dailyRecords, setWaterEntry, openWaterModal}) => {
  return (
    <div className={css.container}>
      <TodayWaterList
        dailyRecords={dailyRecords}
        setWaterEntry={setWaterEntry}
        openWaterModal={openWaterModal}
      />
      <MonthStatsTable/>
    </div>
  );
};

export default StatsWrapper;
