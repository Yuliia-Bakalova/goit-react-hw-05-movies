import styled from '@emotion/styled';

const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 30px;
  width: 350px;
  border-radius: 4px 0 0 4px;
  outline: none;
  border-color: transparent;
  padding-left: 10px;
  font-family: "Gill Sans", sans-serif; 
`;
const SearchBtn = styled.button`
  height: 36px;
  width: 40px;
  padding: 0;
  border-radius: 0 4px 4px 0;
  border-color: transparent;
  display: block;
  background-color: #a1a1a1;
  color: #000;
  size: 20;
 transition: all 250ms linear 0s;
  &:hover {
     background-color: #dc8a82;
  }
`;

export { SearchBtn, SearchForm, Input };
