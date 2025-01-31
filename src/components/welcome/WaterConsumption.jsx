import React from "react";
import clsx from "clsx";
import css from "./WaterConsumption.module.css";

const WaterConsumption = () => {
  return (
    <div className={clsx(css.waterTrackerWrapper)}>
      <h1 className={clsx(css.h1)}>Water consumption tracker</h1>
      <h2 className={clsx(css.h2)}>Record daily water intake and track</h2>
      <h3 className={clsx(css.h3)}>Tracker Benefits</h3>
      <ul className={clsx(css.listBenefits)}>
        <li className={clsx(css.itemBenefits)}>
          <svg width="32" height="32">
            <use href="../../../public/sprite.svg#icon-calendar"></use>
          </svg>
          Habit drive
        </li>
        <li className={clsx(css.itemBenefits)}>
          <svg width="32" height="32">
            <use href="../../../public/sprite.svg#icon-chart-bar"></use>
          </svg>
          View statistics
        </li>
        <li className={clsx(css.itemBenefits)}>
          <svg width="32" height="32">
            <use href="../../../public/sprite.svg#icon-wrench-screwdriver"></use>
          </svg>
          Personal rate setting
        </li>
      </ul>

      <button type="button">Try tracker</button>
    </div>
  );
};

export default WaterConsumption;
