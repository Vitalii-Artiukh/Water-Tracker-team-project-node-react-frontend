import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import ModalContainer from "../ui/ModalContainer/ModalContainer.jsx";
import Icon from "../ui/Icon.jsx";
import css from "./UserLogoutModal.module.css";
import clsx from "clsx";

const UserLogoutModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className={css.modalContent}>
        <div className={css.modalHeader}>
          <h2 className={css.title}>Log out</h2>
          <button className={css.closeBtn} onClick={onClose} aria-label="Close">
            <Icon name="icon-edit" width={24} height={24} />
          </button>
        </div>
        <p className={css.subtitle}>Do you really want to leave?</p>
        <div className={css.buttonGroup}>
          <button
            onClick={handleLogout}
            className={clsx(css.button, css.logoutBtn)}
          >
            Log out
          </button>
          <button onClick={onClose} className={clsx(css.button, css.cancelBtn)}>
            Cancel
          </button>
        </div>
      </div>
    </ModalContainer>
  );
};

export default UserLogoutModal;
