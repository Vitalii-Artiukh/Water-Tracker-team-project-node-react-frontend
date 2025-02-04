import { Formik, Form } from "formik";

import DailyNormaFormHeading from "./DailyNormaFormHeading/DailyNormaFormHeading";

import TextField from "../form/TextFiled/TextField";

import { fields } from "./fields";

import styles from "./daily-norma-form.module.css";

const DailyNormaForm = () => {
  return (
    <div>
      <DailyNormaFormHeading />

      <Formik initialValues={{}} onSubmit={(values) => {}}>
        {({ isSubmitting }) => (
          <Form>
            <TextField {...fields.weight} />
            <TextField {...fields.time} />
            <TextField {...fields.water} />
            <button type="submit" className="save-button">
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DailyNormaForm;
