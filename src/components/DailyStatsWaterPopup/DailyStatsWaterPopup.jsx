import ReactModal from "react-modal";
import css from "./DailyStatsWaterPopup.module.css";

const customStyles = {
  overlay: {
    position: "fixed",
    // top: 150,
    // left: 0,
    // right: 0,
    // bottom: 0,
    backgroundColor: "transparent",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px 13px",
    // top: "50%",
    left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // marginTop: "-28px",
    // transform: "translate(-50%, -50%)",
    transform: "translateX(-50%)",
    width: "280px",
    height: "188px",
    backgroundColor: "var(--primary-color-white)",
    boxShadow: "0px 4px 4px 0px rgba(64, 123, 255, 0.3)",
    objectFit: "cover",
    overflow: "hidden",
    borderRadius: "10px",
  },
};

ReactModal.setAppElement("#root");

const DailyStatsWaterPopup = ({ isOpen, closeModal, modalData, cords }) => {
  const { overlay, content } = customStyles;
    overlay.top = cords.top - parseInt(content.height) - 52 + "px";
  console.log(parseInt(content.height));
  //   const {
  //     urls: { regular },
  //     description,
  //     alt_description,
  //   } = modalData;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      bodyOpenClassName={css.ReactModal__Body}
    >
      <p style={{ color: "var(--primary-color-blue)" }}>5, April</p>
      <p className={css.modalText}>
        Daily norma: <span className={css.modalSpan}>1.5 L</span>
      </p>
      <p className={css.modalText}>
        Fulfillment of the daily norm:{" "}
        <span className={css.modalSpan}>100%</span>
      </p>
      <p className={css.modalText}>
        How many servings of water: <span className={css.modalSpan}>6</span>
      </p>
    </ReactModal>
  );
};

export default DailyStatsWaterPopup;
