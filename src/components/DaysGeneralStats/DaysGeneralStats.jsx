import { useCallback, useEffect, useRef } from "react";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { useClickOutside } from "../../hooks/useClickOutside";
import css from "./DaysGeneralStats.module.css";

const DaysGeneralStats = ({ isOpen, modalData, setIsShowModal }) => {
  const { isMobile, isTablet } = useMatchMedia();
  const ref = useRef(null);

  const { cords, currentElHeight } = modalData;

  const styles = {
    width: "280px",
    height: "188px",
  };

  if (cords && currentElHeight) {
    if (isMobile) {
      styles.left = "50%";
      styles.transform = "translateX(-50%)";

      cords.top > parseInt(styles.height) + 14
        ? (styles.top = cords.top - parseInt(styles.height) - 14 + "px")
        : (styles.top = cords.top + currentElHeight + 14 + "px");
    }
    if (isTablet) {
      console.log(modalData.cords.left);
    }
  }

  const onCloseModal = useCallback(() => {
    if (isOpen) {
      setIsShowModal(false);
    }
  }, [setIsShowModal, isOpen]);

  useClickOutside(ref, () => {
    if (isOpen) setIsShowModal(false);
  });

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
    <div className={css.modal} style={{ ...styles }} ref={ref}>
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
    </div>
  );
};

export default DaysGeneralStats;
