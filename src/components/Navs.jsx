// All the page links are created here
import { Link } from 'react-router-dom';

// Array to store name and path of all pages
const LINKS = [
  { text: 'Home', to: '/' },
  { text: 'Starred', to: '/starred' },
];

// Function which returns a list of all the page links
const Navs = () => {
  return (
    <div>
      <ul>
        {LINKS.map(item => (
          <li key={item.to}>
            <Link to={item.to}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navs;
