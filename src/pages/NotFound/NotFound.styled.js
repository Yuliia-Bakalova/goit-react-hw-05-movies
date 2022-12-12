import { NavLink } from 'react-router-dom';

import styled from '@emotion/styled';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 15px;
`;
const Title = styled.h1`
  font-family: "Gill Sans", sans-serif; 
  font-size: 200px;
  color: #3c3a5e;
`;
const Text = styled.p`
  font-family: "Gill Sans", sans-serif; 
  color: #000;
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 30px;
`;
const Back = styled(NavLink)`
  display: block;
  width: 100px;
  color: #000;
  background-color: #7d77e8;
  text-decoration: none;
  font-family: "Gill Sans", sans-serif; 
  padding: 8px 16px;
  border-radius: 4px;
  margin-bottom: 15px;
  text-align: center;
 transition: all 250ms linear 0s;
  :hover {
    background-color: red;
    color: #fff;
  }
`;

export { Container, Text, Title, Back };
