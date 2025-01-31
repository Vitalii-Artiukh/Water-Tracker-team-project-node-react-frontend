import { useDispatch } from 'react-redux'
import { useAuthSelector } from '../../hooks/useAuthSelector';
import { useEffect } from 'react';
import { fetchDailyNorma } from '../../redux/water/operations';

const DailyNorma = ({onEditClick}) => {
    const dispatch = useDispatch();
    const { dailyNorm } = useAuthSelector(); 

    // const onEditDailyNorma = ({}) => {
    //     dispatch()
    // };

    useEffect(() => {
        dispatch(fetchDailyNorma())
    }, [dispatch]);

  return (
    <div>
        <h3>My daily norma</h3>
        <div>
        <p>{dailyNorm ? dailyNorm : '1.5L'}</p>
        <button onClick={onEditClick}>Edit</button>
        </div>
    </div>
  )
}

export default DailyNorma