import css from "./WhyWater.module.css";

const WhyWater = () => {
  return (
    <div className={css.drinkWrapper}>
      <h3 className={css.listTitle}>Why drink water</h3>
      <ul className={css.drinkList}>
        <li className={css.drinItem}>
          <div className={css.point}></div>Supply of nutrients to all organs
        </li>
        <li className={css.drinItem}>
          <div className={css.point}></div>Providing oxygen to the lungs
        </li>
        <li className={css.drinItem}>
          <div className={css.point}></div>Maintaining the work of the heart
        </li>
        <li className={css.drinItem}>
          <div className={css.point}></div>Release of processed substances
        </li>
        <li className={css.drinItem}>
          <div className={css.point}></div>Ensuring the stability of the
          internal environment
        </li>
        <li className={css.drinItem}>
          <div className={css.point}></div>Maintaining within the normal
          temperature
        </li>
        <li className={css.drinItem}>
          <div className={css.point}></div>Maintaining an immune system capable
          of resisting disease
        </li>
      </ul>
    </div>
  );
};

export default WhyWater;
