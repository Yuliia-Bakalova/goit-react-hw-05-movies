import styled from '@emotion/styled';

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 16px;
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;

`;
const Item = styled.li`
  text-align: center;
  border-radius: 2px;
  margin-bottom: 25px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
 
`;
const CastImg = styled.img`
    width: 100%;
  height: 82%;
  object-fit: cover;
`;
const Title = styled.p`
  font-weight: 600;
`;
const Text = styled.span`
  font-weight: 400;
`;

export { List, CastImg, Item, Text, Title };
