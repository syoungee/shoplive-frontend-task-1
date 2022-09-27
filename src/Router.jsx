import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import SearchPage from './pages/SearchPage';

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/search/:text" element={<SearchPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
