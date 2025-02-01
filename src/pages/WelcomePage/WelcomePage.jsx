import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux';

const WelcomePage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <p>WELCOME</p>
      <button
        type="button"
        onClick={() =>
          dispatch(
            authOperations.signUp({
              name: 'Andero1248844',
              email: 'egegegegey112@mail.com',
              password: 'valuesuserPasplod',
            })
          )
        }
      >
        register
      </button>
    </>
  );
};

export default WelcomePage;
