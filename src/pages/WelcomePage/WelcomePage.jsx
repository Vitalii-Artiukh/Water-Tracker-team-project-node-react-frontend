import clsx from "clsx";
import css from "./WelcomePage.module.css";
import WaterConsumption from "../../components/welcome/WaterConsumption.jsx";
import WhyWater from "../../components/welcome/whyWater.jsx";

const WelcomePage = () => {
  return (
    <div className={clsx(css.container)}>
      <WaterConsumption />
      <WhyWater />
    </div>
  );
};

export default WelcomePage;
