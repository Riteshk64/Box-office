import { useStarredShows } from '../lib/useStarredShows';
import { useQuery } from 'react-query';
import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/Shows/ShowGrid';
import { TextCenter } from '../common/TextCentre';

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
    return <TextCenter>No shows were Starred</TextCenter>;
  }

  if (starredShowsError) {
    return (
      <TextCenter>An error occured: {starredShowsError.message}</TextCenter>
    );
  }

  return <TextCenter>Shows are still loading</TextCenter>;
};

export default Starred;
