import { Formik, Form } from "formik";

import DailyNormaFormHeading from "./DailyNormaFormHeading/DailyNormaFormHeading";

import TextField from "../form/TextFiled/TextField";
import Button from "../Button/Button";

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
            <Button>Save</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default DailyNormaForm;
