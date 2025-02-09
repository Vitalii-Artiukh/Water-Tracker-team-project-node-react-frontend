import css from "./WaterRatioPanel.module.css";
import {useState} from "react";
import WaterForm from "../WaterForm/WaterForm.jsx";

const WaterRatioPanel = () => {

  const [showWaterForm,setShowWaterForm] = useState(false);
  const hideWaterForm = () => setShowWaterForm(false)
  const waterProgress = Math.round((880 / 1500) * 100);
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
                backgroundColor: '#9ebbff',
              }}
            >
              {displayedPercentage <= 100 && (
                <p
                  className={css.percentNumber}
                  style={{
                    left: `${displayedPercentage}%`,
                    transform: 'translateX(-50%)',
                    color: '#407bff',
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
            <div className={css.mark} style={{ left: '0%' }}></div>{' '}
            {/* Смужка 0% */}
            <div className={css.mark} style={{ left: '50%' }}></div>{' '}
            {/* Смужка 50% */}
            <div className={css.mark} style={{ left: '100%' }}></div>{' '}
            {/* Смужка 100% */}
          </div>
          <div className={css.percentWrap}>
            <p className={css.percent}>0%</p>
            <p className={css.percent}>50%</p>
            <p className={css.percent}>100%</p>
          </div>
        </div>
      </div>
      <button
        className={css.btn}
        type="button"
        onClick={() => setShowWaterForm(true)}
      >
        Add Water
      </button>
        <WaterForm
            showWaterForm={showWaterForm}
            handleVisibleForm={hideWaterForm}
        />
    </div>
  );
};

export default WaterRatioPanel;
