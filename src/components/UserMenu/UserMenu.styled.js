import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const User = styled.p`
  font-size: 18px;
  color: #000;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #28a745;
  border: none;
  border-radius: 50px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: background-color 300ms ease, transform 0.3s ease;

  &:hover {
    background-color: #218838;
    transform: scale(1.05);
  }

  &:active {
    color: white;
    background-color: #629ee1;
  }
`;
