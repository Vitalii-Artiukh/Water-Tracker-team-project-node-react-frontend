import { useSelector } from 'react-redux';
import { waterSelectors } from '../redux';

export const useWaterSelector = () => {
  const waterServings = useSelector(waterSelectors.selectWaterServings);
  const currentServing = useSelector(waterSelectors.selectCurrentServing);
  const isLoading = useSelector(waterSelectors.selectIsLoading);

  return {
    waterServings,
    currentServing,
    isLoading,
  };
};
