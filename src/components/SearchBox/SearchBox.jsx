import s from './SearchBox.module.css';

const SearchBox = ({ value, onSearch }) => {
  return (
    <div>
      <label className={s.label}>
        <span>Find contacts by name</span>
        <input
          className={s.input}
          type="text"
          name="search"
          onChange={e => onSearch(e.target.value)}
          value={value}
        />
      </label>
    </div>
  );
};

export default SearchBox;
