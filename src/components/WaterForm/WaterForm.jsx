import {useEffect, useState} from "react";
import moment from "moment";
import ModalContainer from "../ui/ModalContainer/ModalContainer.jsx";
import css from "./WaterForm.module.css";
import Icon from "../ui/Icon.jsx";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {addWater,updateWater} from "../../redux/water/operations.js";


const validationSchemas = Yup.object({
    waterVolume: Yup.number()
        .min(0)
        .max(1500)
        .required("Amount Of Water is required"),
    time: Yup
        .string()
        .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:mm)")
        .required("Recording Time is required"),
});

const WaterForm = ({showWaterForm, handleVisibleForm ,waterEntry = null  }) => {

    const [initialValues, setInitialValues] = useState({
        waterVolume: 50,
        time: moment().format('HH:mm'),
        entryId: null
    })

    useEffect(() => {
        if (waterEntry !== null) {
            setInitialValues(waterEntry)
        }
    }, [waterEntry]);

    const [waterVolume, setWaterVolume] = useState(initialValues.waterVolume);
    const dispatch = useDispatch();

    const decreaseWaterVolume = (setFieldValue) => {
        setWaterVolume(prevState => {
            const newValue = prevState - 50;
            const value = (newValue < 0) ? prevState : newValue;
            setFieldValue('waterVolume', value)
            return value;
        })
    }

    const increaseWaterVolume = (setFieldValue) => setWaterVolume(prevState => {
            const newValue = prevState + 50;
            const value = (newValue > 1500) ? prevState : newValue;
            setFieldValue('waterVolume', value)
            return value;
        }
    )

    return (
        <>
            <ModalContainer isOpen={showWaterForm}>
                <div className={css.modalContent}>
                    <div className={css.modalHeader}>
                        <div className={css.modalHeader}>
                            <h2 className={css.title}>Add water</h2>
                            <button className={css.closeBtn} onClick={handleVisibleForm} aria-label="Close">
                                <Icon name="icon-x-mark" width={24} height={24}/>
                            </button>
                        </div>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        enableReinitialize={true}
                        // validationSchema={validationSchemas}
                        onSubmit={(values, { setSubmitting },actions) => {
                            let {time, waterVolume} = values;
                            time = moment(time, 'HH:mm').format('YYYY-MM-DDTHH:mm')
                            if (waterEntry != null) {
                                dispatch(updateWater({time, waterVolume, entryId: waterEntry.entryId}));
                            } else {
                                dispatch(addWater({time, waterVolume}));
                            }

                            handleVisibleForm()
                            actions.resetForm();
                            setSubmitting(false);

                        }}
                    >
                        {({errors,isSubmitting, touched, setFieldValue}) => {
                            return (
                                <Form className={css.form}>
                                    {isSubmitting}
                                    <div className={css.formItemBlock}>
                                        <p className={css.subtitle}>Choose a value : </p>
                                        <div>
                                            <div className={css.formTextLabel}>
                                                Amount of water:
                                            </div>

                                            <div className={css.buttonCircleContainer}>
                                                <div>
                                                    <button className={css.buttonRound}
                                                            onClick={() => decreaseWaterVolume(setFieldValue)}>-
                                                    </button>
                                                </div>
                                                <div className={css.amountOfWaterLabel}>
                                                    {waterVolume} ml
                                                </div>

                                                <div>
                                                    <div className={css.buttonRound}
                                                         onClick={() => increaseWaterVolume(setFieldValue)}>+
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={css.formItemBlock}>
                                        <div className={css.label}>Recording time:</div>
                                        <Field
                                            type="text"
                                            name="time"
                                            className={`${css.inputField} ${
                                                errors.time && touched.time ? css.inputError : ""
                                            }`}
                                            placeholder="Recording Time"
                                        />
                                        <ErrorMessage
                                            className={css.errorMessage}
                                            name="password"
                                            component="span"
                                        />
                                    </div>
                                    <div className={css.formItemBlock}>
                                        <div className={css.labelTime}>
                                            <p>Enter the value of the water used:</p>
                                        </div>
                                        <Field
                                            type="number"
                                            name="waterVolume"
                                            onChange={(e) => {
                                                setFieldValue("waterVolume", e.target.value);
                                                setWaterVolume(e.target.value);
                                            }}
                                            className={`${css.inputField} ${
                                                errors.waterVolume && touched.waterVolume ? css.inputError : ""
                                            }`}
                                            placeholder="Recording Time"
                                        />
                                        <ErrorMessage
                                            className={css.errorMessage}
                                            name="password"
                                            component="span"
                                        />
                                    </div>

                                    <div className={css.modalFooter}>
                                        <div className={css.smallButton}>{waterVolume} ml</div>
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

export default WaterForm;
