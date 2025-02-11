import * as yup from 'yup';
import { fields } from './dailyNormaModalFields.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { authOperations } from '../../redux/index.js';
import styles from './DailyNormaModal.module.css';
import toast from 'react-hot-toast';
import Icon from '../ui/Icon.jsx';
import Button from '../ui/Button/Button.jsx';
import TextField from '../ui/TextFiled/TextField.jsx';
import RadioGroup from '../ui/RadioGroup/RadioGroup.jsx';
import ModalContainer from '../ui/ModalContainer/ModalContainer.jsx';
import { useAuthSelector } from '../../hooks/useAuthSelector.js';

const addWaterSchema = yup.object().shape({
  weight: yup
    .number()
    .required()
    .min(0, "Min weight can't be less then 20 kg")
    .max(300, "Max weight can't be more then 300 kg"),
  time: yup
    .string()
    .required()
    .matches(/^(0|[1-9]|1[0-8])$/, 'Time must match the following pattern hh'),
  gender: yup
    .string()
    .required()
    .oneOf(['male', 'female'], 'Gender can be either man or women'),
  water: yup
    .number()
    .required()
    .min(0, "Min drunken water can't be less then 0 liters")
    .max(15, "Max drunken water can't be more then 15 liters"),
});

const calcDailyNorma = ({ gender, weight, time }) => {
  if (!weight || !time) return 0;
  const weightCoef = gender === 'woman' ? 0.03 : 0.04;
  const timeCoef = gender === 'woman' ? 0.4 : 0.6;
  return (weight * weightCoef + time * timeCoef).toFixed(2);
};

const DailyNormaModal = ({ isOpen, closeModal }) => {
  const [userIsTyping, setUserIsTyping] = useState(true);

  const dispatch = useDispatch();
  const { user } = useAuthSelector();

  const defaultValues = {
    gender: user.gender,
    weight: '0',
    time: '0',
    water: (user.dailyNorm / 1000).toString(),
  };

  const getInitialValues = () => {
    const savedData = localStorage.getItem('dailyNormData');
    if (!savedData || savedData === 'undefined') return defaultValues;
    try {
      const values = JSON.parse(savedData);

      return {
        ...values,
        water: (user.dailyNorm / 1000).toString(),
      };
    } catch {
      return defaultValues;
    }
  };

  const [formValues, setFormValues] = useState(getInitialValues());

  const handleSubmit = async values => {
    try {
      await dispatch(
        authOperations.updateUserWaterRate(Number(values.water) * 1000)
      ).unwrap();

      console.log('field: ', Number(values.water).toFixed(2));
      console.log('calc ', calcDailyNorma(values));

      const dataToSave =
        Number(values.water).toFixed(2) === calcDailyNorma(values)
          ? values
          : {
              ...defaultValues,
              water: values.water,
            };
      localStorage.setItem('dailyNormData', JSON.stringify(dataToSave));
      toast.success('Your Daily Norma successfully updated!');
      closeModal();
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div>
        <button type="button" className={styles.closeBtn} onClick={closeModal}>
          <Icon name="icon-x-mark" />
        </button>
        <h3 className={styles.title}>My daily norma</h3>
        <div className={styles.formulaWrapper}>
          <p>
            For girl:{' '}
            <span className={styles.formula}>V=(M*0,03) + (T*0,4)</span>
          </p>
          <p>
            For man:{' '}
            <span className={styles.formula}>V=(M*0,04) + (T*0,6)</span>
          </p>
        </div>
        <p className={styles.formulaComment}>
          <span className={styles.formulaCommentStar}>*</span> V is the volume
          of the water norm in liters per day, M is your body weight, T is the
          time of active sports, or another type of activity commensurate in
          terms of loads (in the absence of these, you must set 0)
        </p>
        <Formik
          initialValues={formValues}
          validationSchema={addWaterSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, errors, setFieldValue, setFieldError }) => (
            <Form>
              <RadioGroup
                {...fields.gender}
                onChange={evt => {
                  const newVal = evt.target.value;
                  setFieldValue('gender', newVal);
                  setFieldError('water', null);
                  setUserIsTyping(false);
                  setFormValues(prev => ({ ...prev, gender: newVal }));
                }}
                error={errors.gender}
              />
              <TextField
                {...fields.weight}
                onChange={evt => {
                  const newVal = evt.target.value;
                  setFieldValue('weight', newVal);
                  setFieldError('water', null);
                  setUserIsTyping(false);
                  setFormValues(prev => ({ ...prev, weight: newVal }));
                }}
                error={errors.weight}
              />
              <TextField
                {...fields.time}
                onChange={evt => {
                  const newVal = evt.target.value;
                  setFieldValue('time', newVal);
                  setFieldError('water', null);
                  setUserIsTyping(false);
                  setFormValues(prev => ({ ...prev, time: newVal }));
                }}
                error={errors.time}
              />
              <p className={styles.waterDay}>
                The required amount of water in liters per day:{' '}
                <span className={styles.waterDayValue}>
                  {calcDailyNorma(values)} L
                </span>
              </p>
              <TextField
                {...fields.water}
                error={errors.water}
                onChange={evt => {
                  const newVal = evt.target.value;
                  setFieldValue('water', newVal);
                  setUserIsTyping(true);
                  setFormValues(prev => ({ ...prev, water: newVal }));
                }}
                value={userIsTyping ? values.water : calcDailyNorma(values)}
              />
              <Button
                type="submit"
                className={styles.saveBtn}
                onClick={() => {
                  setFieldValue(
                    'water',
                    userIsTyping ? values.water : calcDailyNorma(values)
                  );
                  setFormValues(prev => ({
                    ...prev,
                    water: userIsTyping ? values.water : calcDailyNorma(values),
                  }));
                }}
              >
                Save
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </ModalContainer>
  );
};

export default DailyNormaModal;
