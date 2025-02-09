import { useState } from 'react';

import DailyNorma from '../../components/DailyNorma/DailyNorma';
import StatsWrapper from '../../components/StatsWrapper/StatsWrapper';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import MyDailyNormaModal from '../../components/MyDailyNormaModal/MyDailyNormaModal';

import css from './HomePage.module.css';

const HomePage = () => {
  const [isNormaModalOpen, setIsNormaModalOpen] = useState(false);

  const openModal = () => setIsNormaModalOpen(true);
  const closeModal = () => setIsNormaModalOpen(false);

  return (
    <div className={css.pageWrapper}>
      <MyDailyNormaModal isOpen={isNormaModalOpen} closeModal={closeModal} />
      <div>
        <DailyNorma openModal={openModal} />
        <WaterRatioPanel />
      </div>
      <StatsWrapper />
    </div>
  );
};

export default HomePage;
