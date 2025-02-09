import DaysGeneralStats from "../DaysGeneralStats/DaysGeneralStats";
import MonthStatsListItem from "../MonthStatsListItem/MonthStatsListItem";

import css from "./MonthStatsList.module.css";

const MonthStatsList = ({
  days,
  isOpen,
  modalData,
  setIsShowModal,
  setModalData,
}) => {
  const onShowModal = (e) => {
    const el = e.target;
    const cords = el.getBoundingClientRect();
    const elHeight = el.closest("li").offsetHeight;
    const elWidth = el.closest("li").offsetWidth;
    const listCords = el.closest("ul").getBoundingClientRect();
    const currentDay = Number(el.childNodes[0].data);

    setIsShowModal(true);

    setModalData({
      ...modalData,
      cords: cords,
      currentElHeight: elHeight,
      currentElWidth: elWidth,
      currentDay: currentDay,
      listCords: listCords,
    });
  };

  return (
    <>
      <ul className={css.list}>
        {days.map((day) => (
          <li key={day} className={css.listItem}>
            <MonthStatsListItem day={day} onShowModal={onShowModal} />
          </li>
        ))}
      </ul>
      {isOpen && (
        <DaysGeneralStats
          isOpen={isOpen}
          modalData={modalData}
          setIsShowModal={setIsShowModal}
        />
      )}
    </>
  );
};

export default MonthStatsList;
