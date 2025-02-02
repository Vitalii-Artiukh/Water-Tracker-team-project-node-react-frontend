import css from "./WaterConsumptionTracker.module.css";
import Icon from "../ui/Icon.jsx";
import { NavLink } from "react-router-dom";

const WaterConsumptionTracker = () => {
  return (
    <div className={css.waterTrackerWrapper}>
      <h1 className={css.pageTitle}>Water consumption tracker</h1>
      <h2 className={css.sectionTitle}>Record daily water intake and track</h2>
      <h3 className={css.listTitle}>Tracker Benefits</h3>

      <ul className={css.listBenefits}>
        <li className={css.itemBenefits}>
          <Icon className={css.iconTracker} name={"icon-calendar"} />
          Habit drive
        </li>
        <li className={css.itemBenefits}>
          <Icon name={"icon-chart-bar"} />
          View statistics
        </li>
        <li className={css.itemBenefits}>
          <Icon name={"icon-wrench-screwdriver"} />
          Personal rate setting
        </li>
      </ul>

      <NavLink className={css.tryTrackerBtn} to={"/signup"}>
        Try tracker
      </NavLink>
    </div>
  );
};

export default WaterConsumptionTracker;
