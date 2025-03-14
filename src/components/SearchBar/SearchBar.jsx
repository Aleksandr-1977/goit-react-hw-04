import css from './SearchBar.module.css';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FcSearch } from 'react-icons/fc';

const SearchBar = ({ onSubmit }) => {
  const [image, setImage] = useState('');

  const handleChange = evt => {
    setImage(evt.target.value);
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    if (!image.trim()) {
      return alert('Empty');
    }
    onSubmit(image);
    setImage('');
  };
  return (
    <div className={css.container}>
      <header className={css.header}>
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name="search"
            value={image}
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button className={css.btn} type="submit">
            <FcSearch size="40" />
          </button>
        </form>
      </header>
    </div>
  );
  resetForm(value);
};
export default SearchBar;
