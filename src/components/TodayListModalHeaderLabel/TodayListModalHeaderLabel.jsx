import css from "./TodayListModalHeaderLabel.module.css"

const TodayListModalHeaderLabel = ({waterVolumeText,timeText })=>{
  return (
    <div className={css.editBlockLabel}>
      <svg className={css.svg}>
        <use href={"/sprite.svg#icon-glass"}></use>
      </svg>
      <span className={css.itemTextWater}>{waterVolumeText}</span>
      <span className={css.itemTextTime}>{timeText}</span>
    </div>
  )
}

export default TodayListModalHeaderLabel;