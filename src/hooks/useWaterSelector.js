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

  const sortedMonthStats = useSelector(waterSelectors.selectSortedMonthStats);
  const sortedDailyRecords = useSelector(
    waterSelectors.selectSortedDailyRecords
  );

  return {
    monthStats,
    dailyRecords,
    sortedMonthStats,
    sortedDailyRecords,
    currentServing,
    error,
    isLoading: monthLoading || dailyLoading || entrieLoading,
  };
};
