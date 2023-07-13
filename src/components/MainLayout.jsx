// Creates the main structture of the app(title, subtitle, links, rendering the pages, etc)
import { Outlet } from 'react-router-dom';
import AppTitle from './AppTitle';
import Navs from './Navs';

const MainLayout = () => {
  return (
    <div>
      {/* App title and subtitle */}
      <AppTitle />
      {/* All page links are rendered here */}
      <Navs />
      {/* Tag to render the current page */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
