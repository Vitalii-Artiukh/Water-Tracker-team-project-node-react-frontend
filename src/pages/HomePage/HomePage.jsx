import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import DailyNorma from "../../components/DailyNorma/DailyNorma";
import StatsWrapper from "../../components/StatsWrapper/StatsWrapper";
import WaterRatioPanel from "../../components/WaterRatioPanel/WaterRatioPanel";
import MyDailyNormaModal from "../../components/MyDailyNormaModal/MyDailyNormaModal";

import { useWaterSelector } from "../../hooks/useWaterSelector";
import { waterOperations } from "../../redux";

import css from "./HomePage.module.css";

const HomePage = () => {
  const [isNormaModalOpen, setIsNormaModalOpen] = useState(false);

  const dispatch = useDispatch();

  const { dailyRecords } = useWaterSelector();

  useEffect(() => {
    dispatch(waterOperations.fetchTodayWaterRecords());
  }, [dispatch]);

  const openModal = () => setIsNormaModalOpen(true);
  const closeModal = () => setIsNormaModalOpen(false);

  return (
    <div className={css.pageWrapper}>
      <MyDailyNormaModal isOpen={isNormaModalOpen} closeModal={closeModal} />
      <div>
        <DailyNorma openModal={openModal} />
        <WaterRatioPanel />
      </div>
      <StatsWrapper dailyRecords={dailyRecords} />
    </div>
  );
};

export default HomePage;
