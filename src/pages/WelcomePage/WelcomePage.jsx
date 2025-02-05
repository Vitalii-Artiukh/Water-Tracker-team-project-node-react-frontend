import DailyNormaForm from "../../components/DailyNormaForm/DailyNormaForm.jsx";
import WaterConsumptionTracker from "../../components/WaterConsumptionTracker/WaterConsumptionTracker.jsx";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater.jsx";
import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={css.wrapper}>
      <DailyNormaForm />
      <WaterConsumptionTracker />
      <WhyDrinkWater />
    </div>
  );
};

export default WelcomePage;
