import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Header = styled.header`
  box-shadow: 0px 9px 20px 0px rgba(0, 0, 0, 0.75);
  background-color: #616161;
  padding: 24px;
  margin-bottom: 30px;
`;

const Navigation = styled.nav``;
const List = styled.ul`
  display: flex;
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;
const Link = styled(NavLink)`
  color: #fff;
  
  font-family: "Gill Sans", sans-serif;
  padding: 8px 16px;
  border-radius: 4px;
  transition: all 250ms linear 0s;
  :hover {
    color: red;
  }

  &.active {
    background-color: #7d77e8;
    color:  #032147;
  }
`;

const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export { Header, Navigation, List, Item, Link, LoadingWrap };
