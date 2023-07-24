// To display individual show pages with complete info
import { useParams, useNavigate } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';
import { useQuery } from 'react-query';
import ShowMainData from '../components/Shows/ShowMainData';
import Details from '../components/Shows/Details';
import Seasons from '../components/Shows/Seasons';
import Cast from '../components/Shows/Cast';

// const useShowById = showId => {
//   const [showData, setShowData] = useState(null); // For data from show id
//   const [showError, setShowError] = useState(null); // For errors

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getShowById(showId);
//         setShowData(data);
//       } catch (err) {
//         setShowError(err);
//       }
//     }

//     fetchData();
//   }, [showId]); // The function code runs when the component runs and the return statement runs the component unmounts. Used the manipulate the page during the component's life cycle.

//   return { showData, showError };
// };

const Show = () => {
  const { showId } = useParams(); // useParams() - To access parameters in the current route(url).
  // const { showData, showError } = useShowById(showId);

  const { data: showData, error: showError } = useQuery({
    queryKey: ['show', showId],
    queryFn: () => getShowById(showId),
    refetchOnWindowFocus: false,
  });

  const navigateTo = useNavigate();

  const onGoBack = () => {
    navigateTo('/');
  };

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return (
      <div>
        <button type="button" onClick={onGoBack}>
          Go back to home page
        </button>

        <ShowMainData
          image={showData.image}
          name={showData.name}
          rating={showData.rating}
          summary={showData.summary}
          genres={showData.genres}
        />

        <div>
          <h2>Details</h2>
          <Details
            status={showData.status}
            premiered={showData.premiered}
            network={showData.network}
          />
        </div>

        <div>
          <h2>Seasons</h2>
          <Seasons seasons={showData._embedded.seasons} />
        </div>

        <div>
          <h2>Cast</h2>
          <Cast cast={showData._embedded.cast} />
        </div>
      </div>
    );
  }

  return <div>Data is loading...</div>;
};

export default Show;
