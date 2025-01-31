import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";

const HomePage = () => {
  return (
    <div>
      <DailyNorma />
      <WaterRatioPanel />
      <p>Today Water List</p>
      <p>Month Stats Table</p>
    </div>
  );
};

export default HomePage;
