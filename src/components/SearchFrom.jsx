import { useState } from 'react';
import { useSearchString } from '../lib/useSearchStr';
import CustomRadio from './CustomRadio';

const SearchForm = ({ onSearch }) => {
  // user input
  const [searchStr, setSearchStr] = useSearchString();

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

        <CustomRadio
          label="Shows"
          name="search-option"
          value="Shows"
          checked={searchOption === 'Shows'}
          onChange={onRadioChange}
        />

        <CustomRadio
          label="Actors"
          name="search-option"
          value="Actors"
          checked={searchOption === 'Actors'}
          onChange={onRadioChange}
        />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
