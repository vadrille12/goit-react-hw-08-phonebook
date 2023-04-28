import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 30px;
  font-size: 26px;
  font-weight: 700;
  border-radius: 15px;
  color: #000;

  &.active,
  &:hover {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #ff4500;
    text-underline-offset: 5px;
  }
`;
