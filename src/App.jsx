// App file (uses react router: updates the URL from a link click without making another request for another document from the server)
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Handles  */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        {/* Dynamic Routing */}
        <Route path="/show/:showId" element={<Show />} />
        {/* To display page not found (404) */}
        <Route path="*" element={<div>Not Found :(</div>} />
        {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route>
      <Route element={<PageLayout />}>
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/tos" element={<Tos />} />
      </Route>
      <Route path="contact-us" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
