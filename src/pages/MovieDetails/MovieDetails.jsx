import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { TbArrowBackUp } from 'react-icons/tb';

import getMovies from 'Api/api';
import FilmInfo from 'components/FilmInfo/FilmInfo';
import SharedLayout from 'components/SharedLayout/SharedLayout';

import { BackLink, Container, Wrap } from './MovieDetails.styled';

const MovieDetails = () => {
  const [filmDetails, setFilmDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovies(`movie/${movieId}`).then(res => setFilmDetails(res.data));
  }, [movieId]);
  const backHref = location.state?.from ?? '/movies';

  return (
    <Container>
      <BackLink to={backHref}>
        <Wrap>
          <TbArrowBackUp size={20} />
        </Wrap>
        Return back
      </BackLink>
      <FilmInfo filmDetails={filmDetails} />
      <SharedLayout location={location} />
    </Container>
  );
};

export default MovieDetails;
