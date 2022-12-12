import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;
const Item = styled.li``;
const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  font-family: "Gill Sans", sans-serif;
  font-weight: 600;
  color: #0c00ff;
   transition: all 250ms linear 0s;
  :hover {
    scale: 1.05;
    color: red;
  }
`;
const Image = styled.img`
  display: block;
  height: 300px;
  width: 200px;
  margin-bottom: 5px;
`;

export { List, Image, Item, Link };
