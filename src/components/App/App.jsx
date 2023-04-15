import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

import { GlobalStyle } from 'components/GlobalStyle';
import { Wrapper, HeroTitle, Title } from './App.styled';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <HeroTitle>Phonebook</HeroTitle>
      <ContactsForm />

      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      {error && <p>{error}</p>}
      <ContactsList />

      <GlobalStyle />
    </Wrapper>
  );
}
