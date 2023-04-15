import styled from 'styled-components';

export const Data = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  margin-right: 40px;
  padding: 5px 10px;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  background-color: transparent;
  color: black;
  border: 2px solid #c9041e;

  cursor: pointer;

  transition: all 300ms ease-out;

  &:hover {
    transform: scale(1.05);
    background-color: #c9041e;
    color: white;
  }

  &:active {
    color: white;
    background-color: #0d488b;
  }
`;
