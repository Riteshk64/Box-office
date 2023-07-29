// Home page of the app(Uses two-way data binding)
import { useState } from 'react';
import { searchForShows, searchForActors } from './../api/tvmaze';
import SearchForm from '../components/SearchFrom';
import ShowGrid from '../components/Shows/ShowGrid';
import ActorGrid from '../components/Actors/ActorGrid';
import { useQuery } from 'react-query';

const Home = () => {
  const [filter, setfilter] = useState('');

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'Shows'
        ? searchForShows(filter.searchStr)
        : searchForActors(filter.searchStr),
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });

  // // results from api
  // const [apiData, setApiData] = useState(null);
  // // contains errors
  // const [apiDataError, setApiDataError] = useState(null);

  // Send input data tvmaze and update apiData value
  const onSearch = async (searchStr, searchOption) => {
    setfilter({ searchStr, searchOption });
  };

  // Display the search results
  const renderApiData = () => {
    if (apiDataError) {
      return <div>Error occured: {apiDataError.message}</div>;
    }

    if (apiData?.length === 0) {
      return <div>No results</div>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowGrid shows={apiData} />
      ) : (
        <ActorGrid actors={apiData} />
      );
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
