import WaterConsumption from "../../components/welcome/WaterConsumption/WaterConsumption.jsx";
import WhyWater from "../../components/welcome/WhyWater/WhyWater.jsx";
import Container from "../../components/ui/Container/Container.jsx";

const WelcomePage = () => {
  return (
    <Container>
      <WaterConsumption />
      <WhyWater />
    </Container>
  );
};

export default WelcomePage;
