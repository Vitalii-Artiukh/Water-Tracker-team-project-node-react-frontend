import ReactModal from "react-modal";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import css from "./DaysGeneralStats.module.css";
import { useEffect } from "react";

const customStyles = {
  overlay: {
    position: "fixed",
    backgroundColor: "transparent",
  },
  content: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px 13px",
    left: "50%",
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

const DaysGeneralStats = ({ isOpen, onCloseModal, modalData }) => {
  const { isMobile, isTablet } = useMatchMedia();
  const { content } = customStyles;
  const { cords, currentElHeight } = modalData;

  if (cords && currentElHeight) {
    if (isMobile) {
      cords.top > parseInt(content.height) + 14
        ? (content.top = cords.top - parseInt(content.height) - 14 + "px")
        : (content.top = cords.top + currentElHeight + 14 + "px");
    }
    if (isTablet) {
      console.log(modalData.cords.left);
    }
  }

  useEffect(() => {
    const onCloseByScroll = () => {
      window.addEventListener("scroll", onCloseModal);
    };

    onCloseByScroll();

    return () => {
      window.removeEventListener("scroll", onCloseModal);
    };
  }, [onCloseModal]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
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

export default DaysGeneralStats;
