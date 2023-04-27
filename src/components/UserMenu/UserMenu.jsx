import { useDispatch, useSelector } from 'react-redux';

import { selectUser } from 'redux/auth/selectors';
import { logout } from 'redux/auth/operations';

import { Button, User, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Wrapper>
      <User>{user.email}</User>
      <Button type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Wrapper>
  );
};
