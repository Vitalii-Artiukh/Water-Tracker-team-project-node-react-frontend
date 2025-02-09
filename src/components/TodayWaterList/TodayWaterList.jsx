import TodayWaterListItem from "../TodayWaterListItem/TodayWaterListItem";
import css from "./TodayWaterList.module.css";

const TodayWaterList = ({ dailyRecords, setWaterEntry,openWaterModal }) => {
  console.log(dailyRecords);
  return (
    <div className={css.container}>
      <h3 className={css.subtitle}>Today</h3>
      <ul className={css.list}>
        {dailyRecords.entries.map( item =>
          <li key={item._id}>
            <TodayWaterListItem item={item} setWaterEntry={setWaterEntry} openWaterModal={openWaterModal}/>
          </li>
        )}
      </ul>
      <button type="button" className={css.button}>
        <svg className={css.svg}>
          <use href={"/public/sprite.svg#icon-plus-small-v2"}></use>
        </svg>
        Add water
      </button>
    </div>
  );
};

export default TodayWaterList;
