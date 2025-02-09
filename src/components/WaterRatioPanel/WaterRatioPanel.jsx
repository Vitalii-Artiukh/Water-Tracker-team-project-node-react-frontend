import { useAuthSelector } from "../../hooks/useAuthSelector";
import { useWaterSelector } from "../../hooks/useWaterSelector";
import Button from "../ui/Button/Button";
import Icon from "../ui/Icon";

import css from "./WaterRatioPanel.module.css";

const WaterRatioPanel = ({ onOpen, isOpen, onClose }) => {
  const { user } = useAuthSelector();
  console.log("user: ", user);
  const { dailyRecords } = useWaterSelector();
  console.log("dailyRecords: ", dailyRecords);

  // const waterProgress = user.dailyNorm ? Math.round((dailyRecords.totalWater / user.dailyNorm) * 100) : Math.round((dailyRecords.totalWater / dailyRecords.totalWater.dailyNorm) * 100)

  const waterProgress = Math.round(
    (dailyRecords.totalWater / user.dailyNorm) * 100
  );

  const displayedPercentage = waterProgress >= 100 ? 100 : waterProgress;

  return (
    <div className={`${css.waterRatioPanelСontainer}`}>
      <div className={css.wrapper}>
        <p className={css.title}>Today</p>
        <div className={css.progressBar}>
          <div className={css.ratioPanelWrapp}>
            <div
              className={css.ratioPanelFill}
              style={{
                width: `${displayedPercentage}%`,
                backgroundColor: "#9ebbff",
              }}
            >
              {displayedPercentage <= 100 && (
                <p
                  className={css.percentNumber}
                  style={{
                    left: `${displayedPercentage}%`,
                    transform: "translateX(-50%)",
                    color: "#407bff",
                  }}
                >
                  {`${displayedPercentage}%`}
                </p>
              )}
            </div>
            <div
              className={css.thumb}
              style={{
                left: `${displayedPercentage}%`,
              }}
            ></div>
          </div>
        </div>
        <div className={css.persentContainer}>
          <div className={css.markWrap}>
            <div className={css.mark} style={{ left: "0%" }}></div>
            <div className={css.mark} style={{ left: "50%" }}></div>
            <div className={css.mark} style={{ left: "100%" }}></div>
          </div>
          <div className={css.percentWrap}>
            <p className={css.percent}>0%</p>
            <p className={css.percent}>50%</p>
            <p className={css.percent}>100%</p>
          </div>
        </div>
      </div>
      <Button className={css.btnAdd} onClick={onOpen}>
        <Icon className={css.iconPlus} name={"icon-plus-circle"} />
        Add Water
      </Button>
    </div>
  );
};

export default WaterRatioPanel;
