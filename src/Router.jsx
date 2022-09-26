import { HashRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';

const Router = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;