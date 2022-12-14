import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
import Layout from '../Layout/Layout';
import NotFound from '../../pages/NotFound/NotFound';
import { Box } from './App,styled';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  return (
    <Box>
      {/* <ToastContainer /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
};
