// App file (uses react router: updates the URL from a link click without making another request for another document from the server)
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalTheme } from './theme';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
        <HashRouter>
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
          </Routes>
        </HashRouter>
      </GlobalTheme>
    </QueryClientProvider>
  );
}

export default App;
