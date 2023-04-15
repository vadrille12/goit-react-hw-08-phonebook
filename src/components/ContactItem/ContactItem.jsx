import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';
import { DeleteBtn, Data } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Data>
        {name}: {number}
        <DeleteBtn type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </DeleteBtn>
      </Data>
    </>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
