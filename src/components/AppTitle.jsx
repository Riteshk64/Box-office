// Displays title and subtitle of app page(visible on top of every page)
export default function AppTitle(props) {
  const { title = 'BOX OFFICE', subtitle = 'Search movie' } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}
