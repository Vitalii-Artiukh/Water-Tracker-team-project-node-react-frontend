import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import DailyNorma from '../../components/DailyNorma/DailyNorma';
import StatsWrapper from '../../components/StatsWrapper/StatsWrapper';
import WaterRatioPanel from '../../components/WaterRatioPanel/WaterRatioPanel';
import MyDailyNormaModal from '../../components/MyDailyNormaModal/MyDailyNormaModal';

import css from './HomePage.module.css';
import { waterOperations } from '../../redux/index.js';

const HomePage = () => {
  const dispatch = useDispatch();
  const [isNormaModalOpen, setIsNormaModalOpen] = useState(false);

  const openModal = () => setIsNormaModalOpen(true);
  const closeModal = () => setIsNormaModalOpen(false);

  useEffect(() => {
    dispatch(waterOperations.fetchTodayWaterRecords());
    dispatch(waterOperations.fetchWaterMonthStats('2025-02'));
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <button
        style={{
          position: 'absolute',
          top: '10%',
          left: '40%',
        }}
        type="button"
        onClick={() =>
          dispatch(
            waterOperations.addWaterEntrie({
              time: '2024-02-09T02:30',
              waterVolume: 200,
            })
          )
        }
      >
        add water
      </button>
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
