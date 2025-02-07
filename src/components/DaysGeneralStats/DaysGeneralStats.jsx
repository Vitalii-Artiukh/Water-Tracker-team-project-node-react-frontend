import { useCallback, useEffect, useRef } from "react";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { useClickOutside } from "../../hooks/useClickOutside";
import css from "./DaysGeneralStats.module.css";

const DaysGeneralStats = ({ isOpen, modalData, setIsShowModal }) => {
  const { isMobile, isTablet, isDesktop } = useMatchMedia();
  const targetRef = useRef(null);

  const { cords, listCords, currentElHeight, currentElWidth, currentDay } =
    modalData;

  const styles = {
    height: "188px",
  };

  const popupRange = 14;

  if (cords && currentElHeight) {
    if (isMobile) {
      styles.width = "280px";
      styles.left = "50%";
      styles.transform = "translateX(-50%)";

      cords.top > parseInt(styles.height) + 14
        ? (styles.top =
            cords.top - parseInt(styles.height) - `${popupRange}` + "px")
        : (styles.top = cords.top + currentElHeight + `${popupRange}` + "px");
    }
    if (isTablet) {
      styles.width = "292px";
      styles.transform = "translateX(0)";
      styles.top = cords.top - parseInt(styles.height) + "px";

      (currentDay <= 5) |
      (currentDay >= 11 && currentDay <= 15) |
      (currentDay >= 21 && currentDay <= 25) |
      (currentDay === 31)
        ? (styles.left = listCords.left - 3 + "px")
        : (styles.left = listCords.right - parseInt(styles.width) - 6 + "px");
    }
    if (isDesktop) {
      styles.width = "292px";
      styles.transform = "translateX(0)";
      styles.top = cords.top - parseInt(styles.height) + "px";
      styles.left =
        cords.left - parseInt(styles.width) + currentElWidth / 2 + "px";
    }
  }

  const onCloseModal = useCallback(() => {
    if (isOpen) {
      setIsShowModal(false);
    }
  }, [setIsShowModal, isOpen]);

  useClickOutside(targetRef, () => {
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
    <div className={css.modal} ref={targetRef} style={{ ...styles }}>
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
