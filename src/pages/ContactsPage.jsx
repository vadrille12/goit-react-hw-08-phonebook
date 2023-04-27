import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

const styles = {
  main: { width: 500, margin: '20 auto', padding: 20, borderRadius: 10 },

  h1: { fontSize: 30, textTransform: 'uppercase', textAlign: 'center' },

  h2: {
    fontSize: 24,
    textTransform: 'uppercase',
    textAlign: 'center',
    marginBottom: 30,
  },
};

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Phonebook</h1>
      <ContactsForm />

      <h2 className={styles.h2}>Contacts</h2>
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <p>{error}</p>}
      <ContactsList />
    </main>
  );
}
