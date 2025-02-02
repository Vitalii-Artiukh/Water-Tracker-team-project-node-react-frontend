import Icon from "../ui/Icon";
import css from "./MonthStatsButton.module.css";

const MonthStatsButton = ({ rotate, handleClick }) => {
  return (
    <button
      type="button"
      className={css.button}
      style={{
        transform: rotate,
      }}
      onClick={handleClick}
    >
      <svg width={14} height={14}>
        <use href={"/public/symbol-defs2.svg#icon-chevron-left"}></use>
      </svg>
      {/* <Icon
        name={"icon-chevron-down"}
        width={14}
        height={14}
        fill={"var(--primary-color-blue)"}
        stroke={"var(--primary-color-blue)"}
      /> */}
    </button>
  );
};

export default MonthStatsButton;
