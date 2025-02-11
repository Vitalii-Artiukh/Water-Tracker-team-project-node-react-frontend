import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import DailyNorma from '../../components/DailyNorma/DailyNorma';
import StatsWrapper from '../../components/StatsWrapper/StatsWrapper';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import DailyNormaModal from '../../components/DailyNormaModal/DailyNormaModal';

import { useWaterSelector } from '../../hooks/useWaterSelector';
import { waterOperations } from '../../redux';

import css from './HomePage.module.css';
import TodayListModal from '../../components/TodayListModal/TodayListModal.jsx';

const HomePage = () => {
  const [isNormaModalOpen, setIsNormaModalOpen] = useState(false);
  const [showWaterForm, setShowWaterForm] = useState(false);
  const [waterEntry, setWaterEntry] = useState(null);

  const dispatch = useDispatch();
  const { sortedDailyRecords: dailyRecords } = useWaterSelector();

  useEffect(() => {
    dispatch(waterOperations.fetchTodayWaterRecords());
  }, [dispatch]);

  const openModal = () => setIsNormaModalOpen(true);
  const closeModal = () => setIsNormaModalOpen(false);

  const closeWaterModal = () => setShowWaterForm(false);
  const openWaterModal = () => setShowWaterForm(true);

  return (
    <div className={css.pageWrapper}>
      {isNormaModalOpen && (
        <DailyNormaModal isOpen={isNormaModalOpen} closeModal={closeModal} />
      )}
      <div>
        <DailyNorma openModal={openModal} />
        <WaterRatioPanel
          dailyRecords={dailyRecords}
          openWaterModal={openWaterModal}
        />
      </div>
      <StatsWrapper
        dailyRecords={dailyRecords}
        setWaterEntry={setWaterEntry}
        openWaterModal={openWaterModal}
      />
      <TodayListModal
        dailyRecords={dailyRecords}
        showWaterForm={showWaterForm}
        handleVisibleForm={closeWaterModal}
        waterEntry={waterEntry}
        setWaterEntry={setWaterEntry}
      />
    </div>
  );
};

export default HomePage;
