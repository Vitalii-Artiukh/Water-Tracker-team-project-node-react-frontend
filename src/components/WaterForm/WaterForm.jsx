import {useState} from "react";
import moment from "moment";
import ModalContainer from "../ui/ModalContainer/ModalContainer.jsx";
import css from "./WaterForm.module.css";
import Icon from "../ui/Icon.jsx";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {signIn} from "../../redux/auth/operations.js";
import {addWater} from "../../redux/water/operations.js";


const validationSchemas = Yup.object({
    amountOfWater: Yup.number()
        .min(0)
        .max(1500)
        .required("Amount Of Water is required"),
    recordingTime: Yup
        .string()
        .matches(/^([01]\d|2[0-3]):([0-5]\d)$/, "Invalid time format (HH:mm)")
        .required("Recording Time is required"),
});

const initialValues = {waterVolume: 50, time: moment().format('HH:mm')};


const WaterForm = ({showWaterForm,onClose}) => {
    const [waterVolume, setWaterVolume] = useState(initialValues.waterVolume);
    const dispatch = useDispatch();

    const decreaseWaterVolume = () => {
        setWaterVolume(prevState => {
            const newValue = prevState - 50;
            return (newValue < 0) ? prevState : newValue;
        })
    }

    const increaseWaterVolume = () => setWaterVolume(prevState => {
            const newValue = prevState + 50;
            return (newValue > 1500) ? prevState : newValue;
        }
    )

    const onSubmit = (values, actions) => {
        console.log(values)
        // dispatch(addWater({}));
        actions.resetForm();
    }

    return (
        <>
            <ModalContainer isOpen={showWaterForm}>
                <div className={css.modalContent}>
                    <div className={css.modalHeader}>
                        <div className={css.modalHeader}>
                            <h2 className={css.title}>Add water</h2>
                            <button className={css.closeBtn} onClick={onClose} aria-label="Close">
                                <Icon name="icon-x-mark" width={24} height={24}/>
                            </button>
                        </div>
                    </div>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchemas}
                        onSubmit={onSubmit}
                    >

                        {({isSubmitting, errors, touched}) => (
                            <Form className={css.form}>
                                <div className={css.formItemBlock}>
                                    <p className={css.subtitle}>Choose a value : </p>
                                    <div>
                                        <div className={css.formTextLabel}>
                                            Amount of water:
                                        </div>

                                        <div className={css.buttonCircleContainer}>
                                            <div>
                                                <button className={css.buttonRound} onClick={decreaseWaterVolume}>-
                                                </button>
                                            </div>
                                            <div className={css.amountOfWaterLabel}>
                                                {waterVolume} ml
                                            </div>

                                            <div>
                                                <div className={css.buttonRound} onClick={increaseWaterVolume}>+
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
                                        type="text"
                                        name="waterVolume"
                                        value={waterVolume}
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
                                    <button className={css.saveButton} type='submit'>Save</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </ModalContainer>
        </>
    );
};

export default WaterForm;
