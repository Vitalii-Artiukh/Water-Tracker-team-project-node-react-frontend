import { useWaterSelector } from "../../hooks/useWaterSelector";
import Icon from "../ui/Icon";
import css from "./MonthStatsButton.module.css";

const MonthStatsButton = ({ rotate, handleClick }) => {
  const { isLoading } = useWaterSelector();

  return (
    <button
      type="button"
      disabled={isLoading ? true : false}
      className={css.button}
      style={{
        transform: rotate,
      }}
      onClick={handleClick}
    >
      <Icon name={"icon-chevron-left"} width={14} height={14} />
    </button>
  );
};

export default MonthStatsButton;
