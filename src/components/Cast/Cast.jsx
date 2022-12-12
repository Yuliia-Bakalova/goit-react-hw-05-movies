import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getMovies from 'Api/api';
import Image from '../../images/image_default.jpg';

import { List, CastImg, Item, Text, Title } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovies(`/movie/${movieId}/credits`).then(res => {
      setActors(res.data.cast);
    });
  }, [movieId]);

  return (
    <List>
      {actors &&
        actors.map(({ profile_path, name, character, id }) => {
          return (
            <Item key={id}>
              {profile_path ? (
                <CastImg
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                />
              ) : (
                <CastImg src={Image} alt={name} />
              )}

              <Title>
                Name: <Text>{name}</Text>
              </Title>
              <Title>
                Character: <Text>{character}</Text>
              </Title>
            </Item>
          );
        })}
    </List>
  );
};

export default Cast;
