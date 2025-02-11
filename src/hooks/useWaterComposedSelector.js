import { useSelector } from 'react-redux';
import { waterSelectors } from '../redux/index.js';

export const useWaterComposedSelector = () => {
  const sortedMonthStats = useSelector(waterSelectors.selectSortedMonthStats);
  const sortedDailyRecords = useSelector(
    waterSelectors.selectSortedDailyRecords
  );

  return {
    sortedMonthStats,
    sortedDailyRecords,
  };
};
