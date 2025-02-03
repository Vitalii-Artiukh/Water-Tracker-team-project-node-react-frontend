import Icon from "../ui/Icon";
import css from "./TodayWaterListItem.module.css";

const TodayWaterListItem = () => {
  return (
    <div className={css.item}>
      <div className={css.waterStatsPanel}>
        <svg className={css.svg}>
          <use href={"/public/sprite.svg#icon-glass"}></use>
        </svg>
        <span className={css.itemTextWater}>200 ml</span>
        <span className={css.itemTextTime}>14:00 PM</span>
      </div>
      <div className={css.iconsPanel}>
        <svg width={16} height={16}>
          <use href={"/public/symbol-defs3.svg#icon-pencil-square"}></use>
        </svg>
        <svg width={16} height={16}>
          <use href={"/public/symbol-defs3.svg#icon-trash"}></use>
        </svg>
        {/* <Icon name={"icon-edit"} width={16} height={16} />
        <Icon name={"icon-trash"} width={16} height={16} /> */}
      </div>
    </div>
  );
};

export default TodayWaterListItem;
