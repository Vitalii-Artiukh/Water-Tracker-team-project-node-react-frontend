import styles from "./daily-norma-form-heading.module.css";

const DailyNormaFormHeading = () => {
  return (
    <>
      <h3 className={styles.title}>My daily norma</h3>
      <div className={styles.formulaWrapper}>
        <p>
          For girl:
          <span className={styles.formula}>V=(M*0,03) + (T*0,4)</span>
        </p>
        <p>
          For man:
          <span className={styles.formula}>V=(M*0,04) + (T*0,6)</span>
        </p>
      </div>
      <p className={styles.formulaComment}>
        <span className={styles.formulaCommentStar}>*</span> V is the volume of
        the water norm in liters per day, M is your body weight, T is the time
        of active sports, or another type of activity commensurate in terms of
        loads (in the absence of these, you must set 0)
      </p>
      <div className="radio-group">
        <label className="radio-label">
          <input type="radio" name="gender" value="woman" checked /> For woman
        </label>
        <label className="radio-label">
          <input type="radio" name="gender" value="man" /> For man
        </label>
      </div>
    </>
  );
};

export default DailyNormaFormHeading;
