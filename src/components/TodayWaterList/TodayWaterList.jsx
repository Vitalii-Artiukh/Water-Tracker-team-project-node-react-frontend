import TodayWaterListItem from "../TodayWaterListItem/TodayWaterListItem";
import css from "./TodayWaterList.module.css";

const TodayWaterList = () => {
  return (
    <div className={css.container}>
      <h3 className={css.subtitle}>Today</h3>
      <ul className={css.list}>
        <li>
          <TodayWaterListItem />
        </li>
        <li>
          <TodayWaterListItem />
        </li>
        <li>
          <TodayWaterListItem />
        </li>
        <li>
          <TodayWaterListItem />
        </li>
        <li>
          <TodayWaterListItem />
        </li>
      </ul>
      <button type="button" className={css.button}>
        <svg className={css.svg}>
          <use href="/sprite.svg#icon-plus-small-v2"></use>
        </svg>
        Add water
      </button>
    </div>
  );
};

export default TodayWaterList;
