import React from "react";
import clsx from "clsx";
import css from "./WhyWater.module.css";

const WhyWater = () => {
  return (
    <div className={clsx(css.drinkWrapper)}>
      <h3 className={clsx(css.h3)}>Why drink water</h3>
      <ul className={clsx(css.drinkList)}>
        <li className={clsx(css.item)}>
          <div className={clsx(css.point)}></div>Supply of nutrients to all
          organs
        </li>
        <li className={clsx(css.item)}>
          <div className={clsx(css.point)}></div>Providing oxygen to the lungs
        </li>
        <li className={clsx(css.item)}>
          <div className={clsx(css.point)}></div>Maintaining the work of the
          heart
        </li>
        <li className={clsx(css.item)}>
          <div className={clsx(css.point)}></div>Release of processed substances
        </li>
        <li className={clsx(css.item)}>
          <div className={clsx(css.point)}></div>Ensuring the stability of the
          internal environment
        </li>
        <li className={clsx(css.item)}>
          <div className={clsx(css.point)}></div>Maintaining within the normal
          temperature
        </li>
        <li className={clsx(css.item)}>
          <div className={clsx(css.point)}></div>Maintaining an immune system
          capable of resisting disease
        </li>
      </ul>
    </div>
  );
};

export default WhyWater;
