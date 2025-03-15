import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal, updateModalStateData }) => {
  return (
    <ul className={css.gallerylist}>
      {images.map(({ id, alt_description, urls }) => (
        <li className={css.gallerycard} key={id} onClick={openModal}>
          <ImageCard
            urls={urls}
            alt_description={alt_description}
            updateModalStateData={updateModalStateData}
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
