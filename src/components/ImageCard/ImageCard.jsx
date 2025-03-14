import css from './ImageCard.module.css';

const ImageCard = ({ alt_description, urls }) => {
  return (
    <div className={css.card}>
      <img className={css.cardImage} src={urls.small} alt={alt_description} />
    </div>
  );
};
export default ImageCard;
