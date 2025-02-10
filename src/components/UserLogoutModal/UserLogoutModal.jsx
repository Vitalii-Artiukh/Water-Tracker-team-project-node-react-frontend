import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import ModalContainer from "../ui/ModalContainer/ModalContainer.jsx";
import Icon from "../ui/Icon.jsx";
import css from "./UserLogoutModal.module.css";
import Button from "../ui/Button/Button.jsx";

const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("dailyNormData");
    dispatch(logout());
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2 className={css.title}>Log out</h2>
          <button className={css.closeBtn} onClick={onClose} aria-label="Close">
            <Icon name="icon-x-mark" width={24} height={24} />
          </button>
        </div>
        <p className={css.subtitle}>Do you really want to leave?</p>
        <div className={css.buttonGroup}>
          <Button
            onClick={handleLogout}
            variant="destructive"
            className={css.logoutBtn}
          >
            Log out
          </Button>
          <Button onClick={onClose} variant="cancel" className={css.cancelBtn}>
            Cancel
          </Button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default UserLogoutModal;
