import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import Modal from "react-modal";
import Icon from "../ui/Icon.jsx";
import css from "./UserLogoutModal.module.css";
import ModalContainer from "../ui/ModalContainer/ModalContainer.jsx";

Modal.setAppElement("#root");

const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <h2>Log out</h2>
      <button className={css.closeBtn} onClick={onClose} aria-label="Close">
        <Icon width={16} height={16} />
      </button>
      <p className={css.subtitle}>Do you really want to leave?</p>
      <div className={css.buttons}>
        <button onClick={handleLogout} className={css.logoutBtn}>
          Log out
        </button>
        <button onClick={onClose} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </ModalContainer>
  );
};

export default UserLogoutModal;
