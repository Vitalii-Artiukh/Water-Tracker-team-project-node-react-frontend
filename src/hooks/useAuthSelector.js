import { useSelector } from 'react-redux';
import { authSelectors } from '../redux';

export const useAuthSelector = () => {
  const user = useSelector(authSelectors.selectUser);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const currentTheme = useSelector(authSelectors.selectCurrentTheme);

  return {
    user,
    isLoggedIn,
    isRefreshing,
    currentTheme,
  };
};
