import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import PropTypes from 'prop-types';


import {
  Title,
  InfoLink,
  Section,
  List,
  Item,
} from './MovieItem.styled';

const MovieItem = ({ location }) => {
  const currentlocation = location.state?.from ?? '/';
  return (
    <Section>
      <Title>Additional information</Title>
      <List>
        <Item>
          <InfoLink to="cast" state={{ from: currentlocation }}>
            Cast
          </InfoLink>
        </Item>
        <Item>
          <InfoLink to="reviews" state={{ from: currentlocation }}>
            Reviews
          </InfoLink>
        </Item>
      </List>
      <Suspense
          fallback={<div>Loading...</div>}>
      
        <Outlet />
      </Suspense>
    </Section>
  );
};

MovieItem.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
};

export default MovieItem;
