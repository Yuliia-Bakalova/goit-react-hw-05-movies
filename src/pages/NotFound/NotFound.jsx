import { Back, Container, Text, Title } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Title> 404</Title>
      <Text>Oops, page you were looking for does not exist!</Text>
      <Back to="/">Go Home</Back>
    </Container>
  );
};

export default NotFound;
