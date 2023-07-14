import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  // user input
  const [searchStr, setSearchStr] = useState('');

  // conatains radio button values
  const [searchOption, setSearchOption] = useState('Shows');

  // Update searchStr value
  const searchOnInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  // update searchOption
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault(); // Prevents page reload
    onSearch(searchStr, searchOption);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={searchStr} onChange={searchOnInputChange} />

        <label>
          Shows
          <input
            type="radio"
            name="search-option"
            value="Shows"
            checked={searchOption === 'Shows'}
            onChange={onRadioChange}
          />
        </label>

        <label>
          Actors
          <input
            type="radio"
            name="search-option"
            value="Actors"
            checked={searchOption === 'Actors'}
            onChange={onRadioChange}
          />
        </label>

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
