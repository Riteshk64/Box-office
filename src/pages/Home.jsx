// Home page of the app
import { useState } from 'react';
import { searchForShows, searchForActors } from './../api/tvmaze';

const Home = () => {
  // user input
  const [searchStr, setSearchStr] = useState('');
  // results from api
  const [apiData, setApiData] = useState(null);
  // contains errors
  const [apiDataError, setApiDataEror] = useState(null);
  // conatains radio button values
  const [searchOption, setSearchOption] = useState('Shows');

  // Update searchStr value
  const searchOnInputChange = ev => {
    setSearchStr(ev.target.value);
  };

  // Send input data tvmaze and update apiData value
  const onSearch = async ev => {
    // Prevents page reload
    ev.preventDefault();

    try {
      setApiDataEror(null);
      if (searchOption === 'Shows') {
        const result = await searchForShows(searchStr);
        setApiData(result);
      } else {
        const result = await searchForActors(searchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiDataEror(error);
    }
  };

  // Display the search results
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData.show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <div>
      <form onSubmit={onSearch}>
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
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
