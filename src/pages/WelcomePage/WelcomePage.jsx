import clsx from "clsx";
import css from './WelcomePage.module.css'

const WelcomePage = () => {
  return (
    <div className={clsx(css.container)}>
      <div>
        <h1>Water consumption tracker</h1>
        <h2>Record daily water intake and track</h2>
        <h3>Tracker Benefits</h3>
        <p>Habit drive</p>
        <p>View statistics</p>
        <p>Personal rate setting</p>
        <button type="button">Try tracker</button>
      </div>
      <div>
        <h3>
        Why drink water
        </h3>
        <ul>
          <li className={clsx(css.item)}><div className={clsx(css.point)}></div>Supply of nutrients to all organs</li>
          <li className={clsx(css.item)}><div className={clsx(css.point)}></div>Providing oxygen to the lungs</li>
          <li className={clsx(css.item)}><div className={clsx(css.point)}></div>Maintaining the work of the heart</li>
          <li className={clsx(css.item)}><div className={clsx(css.point)}></div>Release of processed substances</li>
          <li className={clsx(css.item)}><div className={clsx(css.point)}></div>Ensuring the stability of the internal environment</li>
          <li className={clsx(css.item)}><div className={clsx(css.point)}></div>Maintaining within the normal temperature</li>
          <li className={clsx(css.item)}><div className={clsx(css.point)}></div>Maintaining an immune system capable of resisting disease</li>
        </ul>
      </div>
    </div>
  );
};

export default WelcomePage;
