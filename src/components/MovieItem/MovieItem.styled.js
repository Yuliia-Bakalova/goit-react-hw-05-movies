import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const InfoLink = styled(NavLink)`
  color: #000;
  font-family: "Gill Sans", sans-serif; 
  font-size: 25px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 4px;
   transition: all 250ms linear 0s;
  display: block;
  margin-bottom: 20px;

  :hover {
   color: #fff;
    background-color: red;
  }

  &.active {
    background-color: #7d77e8;
    color:  #032147;
  }
`;
const Section = styled.section`
  padding: 15px 0 15px 0;
`;
const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;
const Item = styled.li`
  text-align: center;
  margin-bottom: 15px;
  font-family: "Gill Sans", sans-serif;
  font-size: 30px;
  color: red;
  `;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  font-family: "Gill Sans", sans-serif;
  font-size: 30px;
  color: #fff;
`;

export { Title, InfoLink, Section, List, Item };
