import { useState } from "react";
import { useWaterSelector } from "../../hooks/useWaterSelector";
import DeleteWaterModal from "../DeleteWaterModal/DeleteWaterModal";
import Icon from "../ui/Icon";
import clsx from "clsx";
import css from "./TodayWaterListItem.module.css";

const formatIn12Hours = (time) => {
  const splittedTime = time.split("T")[1];
  let hours = Number(splittedTime.split(":")[0]);
  let minutes = Number(splittedTime.split(":")[1]);
  let am = "AM";

  if (hours > 12) {
    hours -= 12;
    am = "PM";
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return hours + ":" + minutes + " " + am;
};

const TodayWaterListItem = ({ entry, openWaterModal, setWaterEntry }) => {
  const [isOpenDeleteModal, setOpenDeleteModal] = useState(false);
  const { isLoading } = useWaterSelector();
  const { time, waterVolume, _id } = entry;

  const openModal = () => setOpenDeleteModal(true);
  const closeModal = () => setOpenDeleteModal(false);

  const editEntryHandler = () => {
    openWaterModal();
    setWaterEntry(entry);
  };

  return (
    <>
      <div className={css.item}>
        <div className={css.waterStatsPanel}>
          <svg className={css.svg}>
            <use href="/sprite.svg#icon-glass"></use>
          </svg>
          <span className={css.itemTextWater}>{waterVolume} ml</span>
          <span className={css.itemTextTime}>{formatIn12Hours(time)}</span>
        </div>
        <div className={css.iconsPanel}>
          <button
            type="button"
            className={clsx(css.button, css.editButton)}
            onClick={editEntryHandler}
          >
            <Icon name={"icon-edit"} width={16} height={16} />
          </button>
          <button
            type="button"
            className={clsx(css.button, css.trashButton)}
            onClick={openModal}
            disabled={isLoading ? true : false}
          >
            <Icon name={"icon-trash"} width={16} height={16} />
          </button>
        </div>
      </div>
      <DeleteWaterModal
        isOpen={isOpenDeleteModal}
        onClose={closeModal}
        id={_id}
      />
    </>
  );
};

export default TodayWaterListItem;
