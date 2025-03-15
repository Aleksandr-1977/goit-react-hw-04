import css from './ImageModal.module.css';
import Modal from 'react-modal';

const ImageModal = ({ modalIsOpen, closeModal, src, alt }) => {
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      appElement={document.getElementById('root')}
    >
      <img className={css.modalImg} src={src} alt={alt} />
    </Modal>
  );
};
export default ImageModal;
