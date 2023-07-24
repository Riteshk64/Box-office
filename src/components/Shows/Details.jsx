const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <p>Status: {status}</p>
      <p>
        Premeirred {premiered} {network ? `on ${network.name}` : null}
      </p>
    </div>
  );
};

export default Details;
