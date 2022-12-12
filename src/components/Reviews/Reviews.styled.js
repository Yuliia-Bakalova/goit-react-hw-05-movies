import styled from '@emotion/styled';

const List = styled.ul`
   font-family: "Gill Sans", sans-serif; 
  color: #000;
`;
const Item = styled.li`
  padding: 15px;
  border: 2px solid blue;
  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;
const Title = styled.h3`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;
const Text = styled.p``;

export { List, Item, Text, Title };
