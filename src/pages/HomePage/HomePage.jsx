import DailyNorma from "../../components/DailyNorma/DailyNorma";
import StatsWrapper from "../../components/StatsWrapper/StatsWrapper";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";

import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.pageWrapper}>
      <div>
        <DailyNorma />
        <WaterRatioPanel />
      </div>
      <StatsWrapper />
    </div>
  );
};

export default HomePage;
