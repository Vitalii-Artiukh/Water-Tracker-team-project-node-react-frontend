import { useAuthSelector } from "../../hooks/useAuthSelector";
import { useWaterSelector } from "../../hooks/useWaterSelector";
import { selectUserDailyNorm } from "../../redux/auth/selectors";
import Button from "../ui/Button/Button";
import Icon from "../ui/Icon";
import ModalContainer from "../ui/ModalContainer/ModalContainer";

import css from "./WaterRatioPanel.module.css";

const WaterRatioPanel = ({onOpen, isOpen, onClose}) => {
    // const { waterServings } = useWaterSelector(); // [] item
    // const { currentServing } = useWaterSelector(); // порція
    const { user } = useAuthSelector(); // user {... dailyNorm}
    console.log('user: ', user);
    
    
    const {dailyNorm} = useAuthSelector(selectUserDailyNorm);
    console.log('dailyNorm: ', dailyNorm);


  //   const waterProgress = Math.round((currentServing / user.dailyNorm) * 100);

  const waterProgress = dailyNorm ? Math.round((1780 / dailyNorm) * 100) : Math.round((880 / 2000) * 100)

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
            <div className={css.mark} style={{ left: "0%" }}></div>{" "}
            {/* Смужка 0% */}
            <div className={css.mark} style={{ left: "50%" }}></div>{" "}
            {/* Смужка 50% */}
            <div className={css.mark} style={{ left: "100%" }}></div>{" "}
            {/* Смужка 100% */}
          </div>
          <div className={css.percentWrap}>
            <p className={css.percent}>0%</p>
            <p className={css.percent}>50%</p>
            <p className={css.percent}>100%</p>
          </div>
        </div>
      </div>
      <Button className={css.btnAdd} onClick={onOpen}><Icon className={css.iconPlus} name={"icon-plus-circle"} />
        Add Water</Button>
      {/* <button
        className={css.btn}
        type="button"
        onClick={onOpen}
      >
        <Icon className={css.iconPlus} name={"icon-plus-circle"} stroke={"#ffffff"} fill={"#ffffff"}/>
        Add Water
      </button> */}
      {isOpen && <ModalContainer isOpen={isOpen} onClose={onClose} />}
    </div>
  );
};

export default WaterRatioPanel;
