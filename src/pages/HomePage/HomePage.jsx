import { useState } from "react";
import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";

// import css from "./HomePage.module.css";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true)
  };

  const onClose = () => {
    setIsOpen(false)
  };


  return (
    <>
      <DailyNorma onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
      <WaterRatioPanel onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
      {/* <p>Today Water List</p>
      <p>Month Stats Table</p> */}
    </>
  );
};

export default HomePage;
