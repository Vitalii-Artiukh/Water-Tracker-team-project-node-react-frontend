import css from "./WaterConsumptionTracker.module.css";
import Icon from "../ui/Icon.jsx";

const WaterConsumptionTracker = () => {
  return (
    <div className={css.waterTrackerWrapper}>
      <h1 className={css.pageTitle}>Water consumption tracker</h1>
      <h2 className={css.sectionTitle}>Record daily water intake and track</h2>
      <h3 className={css.listTitle}>Tracker Benefits</h3>

      <ul className={css.listBenefits}>
        <li className={css.itemBenefits}>
          <Icon
            className={css.iconTracker}
            name={"icon-calendar"}
            // width={32}
            // height={32}
          />
          Habit drive
        </li>
        <li className={css.itemBenefits}>
          <Icon name={"icon-chart-bar"} width={32} height={32} />
          View statistics
        </li>
        <li className={css.itemBenefits}>
          <Icon name={"icon-wrench-screwdriver"} width={32} height={32} />
          Personal rate setting
        </li>
      </ul>

      <button className={css.tryTrackerBtn} type="button">
        Try tracker
      </button>
    </div>
  );
};

export default WaterConsumptionTracker;
