import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { filterContacts } from 'redux/filterSlice';

import { Input, Label } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="nameToFind"
          value={filter}
          onChange={e => dispatch(filterContacts(e.target.value))}
          autoComplete="off"
          placeholder="Наталья, морская пехота"
        />
      </Label>
    </div>
  );
};
