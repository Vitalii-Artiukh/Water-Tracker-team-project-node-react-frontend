import WaterConsumptionTracker from "../../components/WaterConsumptionTracker/WaterConsumptionTracker.jsx";
import WhyDrinkWater from "../../components/WhyDrinkWater/WhyDrinkWater.jsx";
import Container from "../../components/ui/Container/Container.jsx";
import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <Container>
      <div className={css.wrapper}>
        <WaterConsumptionTracker />
        <WhyDrinkWater />
      </div>
    </Container>
  );
};

export default WelcomePage;
