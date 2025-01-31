import { useDispatch } from 'react-redux'
import { useAuthSelector } from '../../hooks/useAuthSelector';
import { useEffect } from 'react';
import { fetchDailyNorma } from '../../redux/water/operations';

import css from './DailyNorma.module.css';

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
    <div className={css.container}>
        <h3 className={css.title}>My daily norma</h3>
        <div className={css.wrapper}>
        <p className={css.text}>{dailyNorm ? dailyNorm : '1.5L'}</p>
        <button className={css.btn} onClick={onEditClick}>Edit</button>
        </div>
    </div>
  )
}

export default DailyNorma