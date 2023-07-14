// Home page of the app(Uses two-way data binding)
import { useState } from 'react';
import { searchForShows, searchForActors } from './../api/tvmaze';
import SearchForm from '../components/SearchFrom';

const Home = () => {
  // results from api
  const [apiData, setApiData] = useState(null);
  // contains errors
  const [apiDataError, setApiDataError] = useState(null);

  // Send input data tvmaze and update apiData value
  const onSearch = async (searchStr, searchOption) => {
    try {
      setApiDataError(null);

      let result;

      // For shows
      if (searchOption === 'Shows') {
        result = await searchForShows(searchStr);
      } // for actors
      else {
        result = await searchForActors(searchStr);
      }

      setApiData(result);
    } catch (error) {
      setApiDataError(error);
    }
  };

  // Display the search results
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (apiData) {
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    }

    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
