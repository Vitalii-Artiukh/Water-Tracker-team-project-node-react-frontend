import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
<div className={css.imgWrap}></div>
      <DailyNorma />
      <WaterRatioPanel />
      {/* <p>Today Water List</p>
      <p>Month Stats Table</p> */}
    
    </div>
  );
};

export default HomePage;
