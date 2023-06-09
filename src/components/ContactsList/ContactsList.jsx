import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContact, fetchAllContacts } from 'redux/operations';
import { selectLoading } from 'redux/selectors';
import { getVisibleContacts } from 'redux/selectors';
import { Loader } from 'components/Loader';
import { Container, Ul, Li, Btn } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(getVisibleContacts);
  const isLoading = useSelector(selectLoading);
  const dispacth = useDispatch();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && (
        <Ul>
          {contacts.map(contact => (
            <Li key={contact.id}>
              <p>Name: {contact.name}</p>
              <p>Number: {contact.phon}</p>
              <Btn
                type="button"
                onClick={() => dispacth(fetchDeleteContact(contact.id))}
              >
                Delete
              </Btn>
            </Li>
          ))}
        </Ul>
      )}
    </Container>
  );
};
