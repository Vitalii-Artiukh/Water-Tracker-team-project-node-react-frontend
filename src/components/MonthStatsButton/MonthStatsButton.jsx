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
      {/* <svg width={14} height={14}>
        <use href={"/public/sprite.svg#icon-chevron-left"}></use>
      </svg> */}
      <Icon name={"icon-chevron-left"} width={14} height={14} />
    </button>
  );
};

export default MonthStatsButton;
