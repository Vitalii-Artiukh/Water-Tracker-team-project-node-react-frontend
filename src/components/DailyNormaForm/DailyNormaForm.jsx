import { Formik, Form } from "formik";

import TextField from "../ui/TextFiled/TextField";
import RadioGroup from "../ui/RadioGroup/RadioGroup";
import Button from "../ui/Button/Button";

import styles from "./daily-norma-form.module.css";
const calcDailyNorma = ({ gender, weight, time }) => {
  if (!weight || !time) return 0;
  const weightCoef = gender === "woman" ? 0.03 : 0.04;
  const timeCoef = gender === "woman" ? 0.04 : 0.06;
  return (weight * weightCoef + time * timeCoef).toFixed(2);
};
const DailyNormaForm = () => {
  return (
    <div>
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

      <Formik
        initialValues={{ gender: "woman", weight: "0", time: "0", water: "0" }}
        onSubmit={(values) => {}}
      >
        {({ values }) => (
          <Form>
            <RadioGroup {...fields.gender} />
            <TextField {...fields.weight} />
            <TextField {...fields.time} />
            <p className={styles.waterDay}>
              The required amount of water in liters per day:{" "}
              <span className={styles.waterDayValue}>
                {calcDailyNorma(values)} L
              </span>
            </p>
            <TextField {...fields.water} value={calcDailyNorma(values)} />
            <div className={styles.buttonWrapper}>
              <Button width="160px">Save</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DailyNormaForm;
const fields = {
  weight: {
    label: "Your weight in kilograms:",
    name: "weight",
    type: "text",
    placeholder: "weight in kilograms",
  },
  time: {
    label:
      "The time of active participation in sports or other activities with a high physical. load in hours:",
    name: "time",
    type: "text",
    placeholder: "time of active",
  },
  water: {
    label: "Write down how much water you will drink:",
    name: "water",
    type: "text",
    placeholder: "water you will drink",
    bold: true,
  },
  gender: {
    title: "Calculate your rate:",
    name: "gender",
    items: [
      {
        value: "woman",
        label: "For woman",
      },
      {
        value: "man",
        label: "For man",
      },
    ],
  },
};
