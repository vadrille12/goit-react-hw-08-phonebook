import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-size: 26px;
  font-weight: 700;
  color: #000;
  transition: transform 250ms linear;

  &.active {
    font-weight: bold;
    text-decoration: underline;
    text-decoration-color: #ff4500;
    text-underline-offset: 5px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
