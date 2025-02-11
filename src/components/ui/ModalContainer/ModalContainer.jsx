import Modal from 'react-modal';
import css from './ModalContainer.module.css';

Modal.setAppElement('#root');

const ModalContainer = ({
  isOpen = false,
  className = css.modal,
  overlayClassName = css.overlay,
  onClose,
  children,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      className={className}
      overlayClassName={overlayClassName}
      onRequestClose={onClose}
      bodyOpenClassName={css.ReactModal__Body}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;
