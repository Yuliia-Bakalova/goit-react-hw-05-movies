import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Title,
  Link,
  Section,
  List,
  Item,
} from './SharedLayout.styled';

const SharedLayout = ({ location }) => {
  const currentlocation = location.state?.from ?? '/';
  return (
    <Section>
      <Title>Additional information</Title>
      <List>
        <Item>
          <Link to="cast" state={{ from: currentlocation }}>
            Cast
          </Link>
        </Item>
        <Item>
          <Link to="reviews" state={{ from: currentlocation }}>
            Reviews
          </Link>
        </Item>
      </List>
      <Suspense
       fallback={<div>Loading...</div>}>
      
        <Outlet />
      </Suspense>
    </Section>
  );
};

SharedLayout.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }),
};

export default SharedLayout;
