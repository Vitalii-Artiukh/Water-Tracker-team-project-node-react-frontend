import { useState } from "react";
import DailyNorma from "../../components/DailyNorma/DailyNorma";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";

// import css from "./HomePage.module.css";

const HomePage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => {
    setIsOpenModal(true)
  };

  const onCloseModal = () => {
    setIsOpenModal(false)
  };


  return (
    <>
      <DailyNorma onOpenModal={onOpenModal} isOpen={isOpenModal} onClose={onCloseModal}/>
      <WaterRatioPanel onOpenModal={onOpenModal} isOpen={isOpenModal} onClose={onCloseModal}/>
      {/* <p>Today Water List</p>
      <p>Month Stats Table</p> */}
    </>
  );
};

export default HomePage;
