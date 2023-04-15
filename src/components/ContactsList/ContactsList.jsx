import { useSelector } from 'react-redux';

import { selectFilteredContacts } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            <ContactItem id={id} name={name} number={number} />
          </li>
        ))}
      </ul>
    </>
  );
};
