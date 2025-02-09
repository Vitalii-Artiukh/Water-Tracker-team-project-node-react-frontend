import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodayWaterListItem from "../TodayWaterListItem/TodayWaterListItem";
import css from "./TodayWaterList.module.css";
import { waterOperations } from "../../redux";
import { useWaterSelector } from "../../hooks/useWaterSelector";

const TodayWaterList = () => {
  // const dispatch = useDispatch();
  // const { dailyRecords } = useWaterSelector();
  // console.log(dailyRecords);
  // const today = new Date().toISOString().split("T")[0];
  // // console.log(new Date("4, February"));

  // useEffect(() => {
  //   dispatch(waterOperations.fetchWaterEntriesByDay(today));
  // }, [dispatch, today]);

  return (
    <div className={css.container}>
      <h3 className={css.subtitle}>Today</h3>
      <ul className={css.list}>
        {/* <li>
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
        </li> */}
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
