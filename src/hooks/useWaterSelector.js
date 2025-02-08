import { useSelector } from 'react-redux';
import { waterSelectors } from '../redux';

export const useWaterSelector = () => {
  const monthStats = useSelector(waterSelectors.selectMonthStats);
  const dailyRecords = useSelector(waterSelectors.selectDailyRecords);
  const currentServing = useSelector(waterSelectors.selectCurrentServing);
  const error = useSelector(waterSelectors.selectError);
  const { monthLoading, dailyLoading, entrieLoading } = useSelector(
    waterSelectors.selectLoading
  );

  return {
    monthStats,
    dailyRecords,
    currentServing,
    error,
    isLoading: monthLoading || dailyLoading || entrieLoading,
  };
};
