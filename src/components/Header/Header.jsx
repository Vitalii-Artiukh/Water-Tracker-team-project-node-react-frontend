import css from "../Modals/SettingModal/SettingModal.module.css";
import ModalContainer from "../ui/ModalContainer/ModalContainer";
import SettingModal from "../Modals/SettingModal/SettingModal";
import { useState } from "react";

const Header = () => {
  const [isSettingModalOpen, setIsSettingModalOpen] = useState(false);
  const openSettingModal = () => setIsSettingModalOpen(true);
  const closeSettingModal = () => setIsSettingModalOpen(false);

  return (
    <div>
      <span>LOGO</span>
      <button onClick={openSettingModal} type="button">
        Setting
      </button>
      <ModalContainer
        overlayClassName={css.overlaySettingModal}
        className={css.settingModalWrapper}
        isOpen={isSettingModalOpen}
        onClose={closeSettingModal}>
        <SettingModal onClose={closeSettingModal} />
      </ModalContainer>
    </div>
  );
};

export default Header;
