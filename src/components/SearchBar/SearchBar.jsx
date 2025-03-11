import css from './SearchBar.module.css';
import toast, { Toaster } from 'react-hot-toast';
import { useId } from 'react';

const SearchBar = ({ onSubmit }) => {
  const id = useId();
  const handleClear = () => {
    onFilter('');
  };

  return (
    <div className={css.container}>
      <header>
        <form>
          <input
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    </div>
  );
  resetForm(value);
};
export default SearchBar;
