import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, Item, Link } from './Layout.styled';



const Layout = () => {
  return (
    <div>
      <Header>
        <nav>
          <List>
            <Item>
              <Link to="/">Home</Link>
            </Item>
            <Item>
              <Link to="movies">Movies</Link>
            </Item>
          </List>
        </nav>
      </Header>
      <Suspense      
          fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;