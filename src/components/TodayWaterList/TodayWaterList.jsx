import css from "./TodayWaterList.module.css";

const TodayWaterList = () => {
  return (
    <div className={css.container}>
      <h3 className={css.subtitle}>Today</h3>
      <ul className={css.list}></ul>
      <button type="button" className={css.button}>
        <svg className={css.svg}>
          {/* <use href={"/public/sprite.svg#icon-plus-small"}></use> */}
          <use href={"/public/symbol-defs2.svg#icon-plus-small"}></use>
          {/* <use href="/public/chevron-left.svg"></use> */}
        </svg>
        {/* <Icon
          name={"icon-plus-small"}
          width={16}
          height={16}
          fill={"var(--primary-color-blue)"}
          stroke={"var(--primary-color-blue)"}
        /> */}
        Add water
      </button>
    </div>
  );
};

export default TodayWaterList;
