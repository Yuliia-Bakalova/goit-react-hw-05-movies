import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.main`
  padding: 20px;
`;

const BackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 130px;
  color: #000;
  background-color: #7d77e8;
  text-decoration: none;
 font-family: "Gill Sans", sans-serif; 
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 15px;
   transition: all 250ms linear 0s;

  :hover {
    background-color: red;
    color: #fff;
  }
`;
const Wrap = styled.span`
  margin-right: 5px;
  height: 20px;
`;
export { BackLink, Container, Wrap };
