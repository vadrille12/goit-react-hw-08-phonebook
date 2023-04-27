import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/selectors';

import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav style={{display: 'flex', gap: 50}}>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </nav>
  );
};
