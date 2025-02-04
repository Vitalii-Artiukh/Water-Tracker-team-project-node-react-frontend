import css from "./WhyDrinkWater.module.css";

const WhyDrinkWater = () => {
  return (
    <div className={css.drinkWrapper}>
      <h3 className={css.listTitle}>Why drink water</h3>
      <ul className={css.drinkList}>
        <li className={css.drinkItem}>Supply of nutrients to all organs</li>
        <li className={css.drinkItem}>Providing oxygen to the lungs</li>
        <li className={css.drinkItem}>Maintaining the work of the heart</li>
        <li className={css.drinkItem}>Release of processed substances</li>
        <li className={css.drinkItem}>
          Ensuring the stability of the internal environment
        </li>
        <li className={css.drinkItem}>
          Maintaining within the normal temperature
        </li>
        <li className={css.drinkItem}>
          Maintaining an immune system capable of resisting disease
        </li>
      </ul>
    </div>
  );
};

export default WhyDrinkWater;
