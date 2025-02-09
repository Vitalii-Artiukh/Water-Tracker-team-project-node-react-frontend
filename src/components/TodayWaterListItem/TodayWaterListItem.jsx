import Icon from "../ui/Icon";
import css from "./TodayWaterListItem.module.css";
import moment from "moment";
import {useMemo} from "react";

const TodayWaterListItem = ({item, setWaterEntry, openWaterModal}) => {

  const time = useMemo(() => moment(item.time, 'YYYY-MM-DDTHH:mm').format('HH:mm'), [item])

  const openWaterFormForEdit = (item) => {
    setWaterEntry({...item, time, entryId: item._id})
    openWaterModal()
  }
  return (
    <div className={css.item}>
      <div className={css.waterStatsPanel}>
        <svg className={css.svg}>
          <use href={"/public/sprite.svg#icon-glass"}></use>
        </svg>
        <span className={css.itemTextWater}>{item.waterVolume} ml</span>
        <span className={css.itemTextTime}>{time} PM</span>
      </div>
      <div className={css.iconsPanel}>
        <button type="button" className={css.button} onClick={() => openWaterFormForEdit(item)}>
          <Icon name={"icon-edit"} width={16} height={16}/>
        </button>
        <button type="button" className={css.button}>
          <Icon name={"icon-trash"} width={16} height={16}/>
        </button>
      </div>
    </div>
  );
};

export default TodayWaterListItem;
