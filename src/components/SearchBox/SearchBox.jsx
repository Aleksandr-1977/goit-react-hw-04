import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, onFilter }) => {
  const id = useId();
  const handleClear = () => {
    onFilter('');
  };

  return (
    <div className={css.container}>
      <label className={css.text} htmlFor={id}>
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={id}
        value={value}
        onChange={evt => onFilter(evt.target.value)}
      />
      {value && (
        <button type="button" className={css.clearButton} onClick={handleClear}>
          Clear
        </button>
      )}
    </div>
  );
  resetForm(value);
};
export default SearchBox;
