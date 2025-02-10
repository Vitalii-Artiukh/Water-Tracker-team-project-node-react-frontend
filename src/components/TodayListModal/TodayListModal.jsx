import { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import ModalContainer from '../ui/ModalContainer/ModalContainer.jsx';
import css from './TodayListModal.module.css';
import Icon from '../ui/Icon.jsx';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  addWaterEntrie,
  updateWaterEntrie,
} from '../../redux/water/operations.js';
import TodayListModalHeaderLabel from '../TodayListModalHeaderLabel/TodayListModalHeaderLabel.jsx';

const validationSchemas = Yup.object({
  waterVolume: Yup.number()
    .min(50)
    .max(1500)
    .required('Amount Of Water is required'),
  time: Yup.string()
    .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:mm)')
    .required('Recording Time is required'),
});

const TodayListModal = ({
  showWaterForm,
  handleVisibleForm,
  waterEntry,
  setWaterEntry,
  dailyRecords,
}) => {
  const timeOptions = useMemo(() => {
    let now = moment();
    let startOfDay = moment().startOf('day');
    let endOfDay = moment().endOf('day');
    let timeArray = [];

    for (let index = 1; startOfDay.isBefore(endOfDay); index++) {
      let indexTime = startOfDay.format('HH:mm');
      timeArray.push({ key: indexTime, value: indexTime });
      startOfDay.add(5, 'minutes');
    }
    const currentTime = now.format('HH:mm');
    timeArray.push({ key: currentTime, value: currentTime });

    timeArray.sort((a, b) =>
      moment(a.key, 'HH:mm').diff(moment(b.key, 'HH:mm'))
    );

    return timeArray.filter(
      (item, index, self) => index === self.findIndex(t => t.key === item.key)
    );
  }, []);

  const [initialValues, setInitialValues] = useState({
    waterVolume: 50,
    time: moment().format('HH:mm'),
    entryId: null,
  });

  useEffect(() => {
    if (waterEntry !== null) {
      setInitialValues(waterEntry);
      setWaterVolume(waterEntry.waterVolume);
    }
  }, [waterEntry]);

  const [waterVolume, setWaterVolume] = useState(initialValues.waterVolume);
  const dispatch = useDispatch();

  const decreaseWaterVolume = setFieldValue => {
    setWaterVolume(prevState => {
      const newValue = prevState - 50;
      const value = newValue <= 50 ? prevState : newValue;
      setFieldValue('waterVolume', value);
      return value;
    });
  };

  const increaseWaterVolume = setFieldValue =>
    setWaterVolume(prevState => {
      const newValue = prevState + 50;
      const value = newValue > 1500 ? prevState : newValue;
      setFieldValue('waterVolume', value);
      return value;
    });

  const closeModal = () => {
    handleVisibleForm();
    setWaterEntry(null);
  };

  const labelForCreate = entries => {
    if (entries.length === 0) {
      return (
        <TodayListModalHeaderLabel
          waterVolumeText={'Not notes yes'}
          timeText={''}
        />
      );
    } else {
      const lastEntry = [...entries].sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      )[0];

      return (
        <TodayListModalHeaderLabel
          waterVolumeText={lastEntry.waterVolume + ' ml'}
          timeText={moment(lastEntry.time, 'YYYY-MM-DDTHH:mm').format('HH:mm')}
        />
      );
    }
  };

  return (
    <>
      <ModalContainer isOpen={showWaterForm} onClose={closeModal} className={css.modal} overlayClassName={css.overlay}>
        <div className={css.modalContent}>
          <div className={css.modalHeader}>
            {/* <div className={css.modalHeader}> */}
              <h2 className={css.title}>
                {waterEntry ? 'Edit the entered amount of water' : 'Add water'}
              </h2>
              <button
                className={css.closeBtn}
                onClick={closeModal}
                aria-label="Close"
              >
                <Icon name="icon-x-mark"/>
              </button>
            {/* </div> */}
          </div>
          <Formik
            initialValues={initialValues}
            enableReinitialize={true}
            validationSchema={validationSchemas}
            onSubmit={(values, { setSubmitting }) => {
              let { time, waterVolume } = values;
              time = moment(time, 'HH:mm').format('YYYY-MM-DDTHH:mm');
              if (waterEntry != null) {
                dispatch(
                  updateWaterEntrie({
                    entrieId: waterEntry._id,
                    entrieData: { newTime: time, waterVolume },
                  })
                );
              } else {
                dispatch(addWaterEntrie({ time, waterVolume }));
              }

              handleVisibleForm();
              setSubmitting(false);
              setWaterEntry(null);
            }}
          >
            {({ errors, touched, setFieldValue }) => {
              return (
                <Form>
                  <div className={css.formItemBlock}>
                    {waterEntry && (
                      <TodayListModalHeaderLabel
                        waterVolumeText={waterEntry.waterVolume + ' ml'}
                        timeText={moment(waterEntry.time, 'YYYY-MM-DDTHH:mm').format('HH:mm')}
                      />
                    )}
                    {waterEntry === null &&
                      labelForCreate(dailyRecords.entries)}
                    <p className={css.subtitle}>
                      {waterEntry ? 'Correct entered data:' : 'Choose a value:'}
                    </p>
                    <div>
                      <p className={css.formTextLabel}>
                        Amount of water:
                      </p>

                      <div className={css.buttonCircleContainer}>
                        <div>
                          <div
                            className={css.buttonRound}
                            onClick={() => decreaseWaterVolume(setFieldValue)}
                          >
                            <Icon name={'icon-minus-small'} stroke="#407bff" />
                          </div>
                        </div>
                        <div className={css.amountOfWaterLabel}>
                          {waterVolume} ml
                        </div>

                        <div>
                          <div
                            className={css.buttonRound}
                            onClick={() => increaseWaterVolume(setFieldValue)}
                          >
                            <Icon name={'icon-plus-small'} stroke="#407bff" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={css.formItemBlock}>
                    <p className={css.formTextLabel}>Recording time:</p>
                    <Field
                      as="select"
                      name="time"
                      className={`${css.inputField} ${css.dropdown}  ${
                        errors.time && touched.time ? css.inputError : ''
                      }`}
                      placeholder="Recording Time"
                    >
                      {timeOptions.map(item => (
                        <option key={item.value} value={item.value}>
                          {item.value}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage
                      className={css.errorMessage}
                      name="time"
                      component="span"
                    />
                  </div>
                  <div className={css.formItemBlock}>
                    {/* <div className={css.labelTime}> */}
                      <p className={css.labelTime}>Enter the value of the water used:</p>
                    {/* </div> */}
                    <Field
                      type="number"
                      name="waterVolume"
                      onBlur={e => {
                        setFieldValue('waterVolume', e.target.value);
                        setWaterVolume(e.target.value);
                      }}
                      className={`${css.inputField} ${
                        errors.waterVolume && touched.waterVolume
                          ? css.inputError
                          : ''
                      }`}
                      placeholder="Recording Time"
                    />
                    <ErrorMessage
                      className={css.errorMessage}
                      name="waterVolume"
                      component="span"
                    />
                  </div>

                  <div className={css.modalFooter}>
                    <p className={css.smallButton}>{waterVolume} ml</p>
                    <button type="submit" className={css.saveButton}>Save</button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalContainer>
    </>
  );
};

export default TodayListModal;
