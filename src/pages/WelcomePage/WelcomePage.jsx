import WaterConsumption from "../../components/welcome/WaterConsumption.jsx";
import WhyWater from "../../components/welcome/whyWater.jsx";
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
