import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.gallerylist}>
      {images.map(({ id, alt_description, urls }) => (
        <li className={css.gallerycard} key={id}>
          <ImageCard urls={urls} alt_description={alt_description} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
