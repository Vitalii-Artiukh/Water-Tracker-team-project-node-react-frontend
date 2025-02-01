

import css from './DailyNorma.module.css';

const DailyNorma = ({onEditClick}) => {

  return (
    <div className={css.container}>
        <h3 className={css.title}>My daily norma</h3>
        <div className={css.wrapper}>
        <p className={css.text}>1.5L</p>
        <button className={css.btn} onClick={onEditClick}>Edit</button>
        </div>
    </div>
  )
}

export default DailyNorma