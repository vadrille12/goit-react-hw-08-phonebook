import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as Error,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  margin: 30px auto;
  width: 400px;
  height: 300px;
  padding: 20px;
  border-radius: 6px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  position: absolute;
  bottom: 25px;
  right: 25px;

  padding: 7px 15px;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  border: 2px solid green;

  cursor: pointer;
  background-color: transparent;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: green;
  }

  &:active {
    color: white;
    background-color: #629ee1;
  }
`;

export const ErrorMessage = styled(Error)`
  color: red;
`;

export const Field = styled(FormikField)`
  font-size: 18px;
  padding: 10px 15px;
  border-radius: 6px;
  margin-bottom: 6px;
  background-color: transparent;
  border: none;
  border: 2px solid blue;

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  &::placeholder {
    font-size: 15px;
  }
`;
