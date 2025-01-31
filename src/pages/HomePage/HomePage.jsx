import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import bottleImg from "../../assets/images/home/bottle_home_tablet_1x.png";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.container}>
<div className={css.imgWrap}></div>
      {/* <img className={css.img} src='../../assets/images/home/bottle_home_mobile_1x.png' alt="Bottle" /> */}
      <DailyNorma />
      <WaterRatioPanel />
      <p>Today Water List</p>
      <p>Month Stats Table</p>
    
    </div>
  );
};

export default HomePage;
