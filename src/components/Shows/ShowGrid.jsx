// To display show cards in a grid
import ShowCard from './ShowCard';

const ShowGrid = ({ shows }) => {
  return (
    <div>
      {shows.map(data => (
        <ShowCard
          key={data.show.id}
          name={data.show.name}
          image={data.show.image ? data.show.image.medium : '/not-found.png'}
          id={data.show.id}
          summary={data.show.summary}
        />
      ))}
    </div>
  );
};

export default ShowGrid;