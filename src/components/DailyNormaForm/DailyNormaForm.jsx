import { Formik, Form } from "formik";

import DailyNormaFormHeading from "./DailyNormaFormHeading/DailyNormaFormHeading";

import TextField from "../form/TextFiled/TextField";
import RadioGroup from "../form/RadioGroup/RadioGroup";
import Button from "../ui/Button/Button";

import { fields } from "./fields";

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
      <DailyNormaFormHeading />

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
