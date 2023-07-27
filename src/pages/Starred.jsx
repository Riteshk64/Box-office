import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from 'react-query';
import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/Shows/ShowGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: async () =>
      getShowByIds(starredShowsIds).then(result =>
        result.map(show => ({
          show,
        }))
      ),
    refetchOnWindowFocus: false,
  });

  if (starredShows?.length > 0) {
    return <ShowGrid shows={starredShows} />;
  }

  if (starredShows?.length === 0) {
    return <div>No shows were Starred</div>;
  }

  if (starredShowsError) {
    return <div>An error occured: {starredShowsError.message}</div>;
  }

  return <div>Shows are still loading</div>;
};

export default Starred;
