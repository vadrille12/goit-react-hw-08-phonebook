import styled from 'styled-components';

export const Label = styled.label`
  margin-left: 30px;
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  margin-left: 15px;
  width: 250px;
  font-size: 15px;
  padding: 10px;
  border-radius: 4px;
  border: 2px solid blue;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &::placeholder {
    font-size: 15px;
  }
`;
