import { useState } from 'react';
import DailyNorma from '../../components/DailyNorma/DailyNorma';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import MyDailyNormaModal from '../../components/MyDailyNormaModal/MyDailyNormaModal';

import css from './HomePage.module.css';

const HomePage = () => {
  const [isNormaModalOpen, setIsNormaModalOpen] = useState(false);

  const openModal = () => setIsNormaModalOpen(true);
  const closeModal = () => setIsNormaModalOpen(false);
  return (
    <>
      <DailyNorma openModal={openModal} />
      <WaterRatioPanel />
      <MyDailyNormaModal isOpen={isNormaModalOpen} closeModal={closeModal} />
      {/* <p>Today Water List</p>
      <p>Month Stats Table</p> */}
    </>
  );
};

export default HomePage;
