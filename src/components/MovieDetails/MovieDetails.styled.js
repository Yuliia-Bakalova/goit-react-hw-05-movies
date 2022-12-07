import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 15px;
  padding-top: 0;
  font-family: ${p => p.theme.font.main};
  color: ${p => p.theme.color.secondBg};
`;
export const MovieName = styled.h1`
  color: ${p => p.theme.color.accent};
  font-size: 45px;
  margin-bottom: 40px;
  font-family: ${p => p.theme.font.marker};
`;
export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 5px;
  font-family: ${p => p.theme.font.marker};
  font-size: 30px;
`;
export const Text = styled.p`
  font-size: 18px;
  display: flex;
`;
export const Section = styled.section`
  display: flex;
  padding: 15px;
  max-width: 990px;
`;
export const Img = styled.img`
  height: 500px;
  width: 400px;
  border-radius: 10px;
`;
