import styled from 'styled-components';

export const StyledForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 30px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: bold;
  font-family: sans-serif;
  color: #666;
  text-transform: uppercase;
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: sans-serif;
  color: #666;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 15px 0;
  margin-bottom: 30px;
  border: none;
  border-bottom: 2px solid #ccc;
  font-size: 18px;
  font-family: sans-serif;
  background-color: transparent;
  transition: border-bottom-color 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-bottom-color: #666;
  }
`;

export const Btn = styled.button`
  display: block;
  margin: 0 auto;
  padding: 15px 30px;
  border: none;
  border-radius: 3px;
  background-color: #666;
  color: #fff;
  font-size: 18px;
  font-family: sans-serif;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }

  &:active {
    color: white;
    background-color: #629ee1;
  }
`;
