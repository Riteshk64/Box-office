// To display individual show pages with complete info
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getShowById } from '../api/tvmaze';

import { useQuery } from 'react-query';

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

  const { data: showData, error: showError } = useQuery(['show', showId], () =>
    getShowById(showId)
  );

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }

  if (showData) {
    return <div>Got show data: {showData.name}</div>;
  }

  return <div>Data is loading...</div>;
};

export default Show;
