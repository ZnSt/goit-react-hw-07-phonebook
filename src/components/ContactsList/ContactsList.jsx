import React from 'react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContact, fetchAllContacts } from 'redux/operations';
import { getVisibleContacts } from 'redux/selectors';
import { Container, Ul, Li, Btn } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispacth = useDispatch();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);
  return (
    <Container>
      {contacts.length === 0 ? (
        <div>Sorry, there are no contacts yet</div>
      ) : (
        <Ul>
          {contacts.map(contact => (
            <Li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Number: {contact.phon}</p>
              <Btn type="button" onClick={() => dispacth(fetchDeleteContact(contact.id))}>Delete</Btn>
            </Li>
          ))}
        </Ul>
      )}
    </Container>
  );
};
