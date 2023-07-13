// Home page of the app
import { useState } from 'react';
import { searchForShows } from './../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchStr] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiDataError, setApiDataEror] = useState(null);

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

      const result = await searchForShows(searchStr);
      setApiData(result);
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
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
      ));
    }

    return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" value={searchStr} onChange={searchOnInputChange} />
        <button type="submit">Search</button>
      </form>
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
