import styled from '@emotion/styled';

const Section = styled.section`
  display: flex;
  padding: 15px;
  max-width: 990px;
`;
const Img = styled.img`
  height: 500px;
  width: 400px;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 15px;
  padding-top: 0;
font-family: "Gill Sans", sans-serif; 
  color: #000;
`;
const MovieName = styled.h1`
  color: #3c3a5e;
  font-size: 50px;
  margin-bottom: 40px;
font-family: "Gill Sans", sans-serif;

    
`;
const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 5px;
  font-family: "Gill Sans", sans-serif;
  font-size: 30px;
`;
const Text = styled.p`
  font-size: 18px;
  display: flex;
`;

const Wrap = styled.span`
  margin-right: 5px;
  height: 30px;
`;

export { Container, Img, Section, MovieName, Text, Title, Wrap };
