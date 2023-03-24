import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
import { getVisibleContacts } from 'redux/selectors';
import { fetchAddContact } from 'redux/operations';
import { FormContainer, FormSt, Input, Btn } from './Form.styled';

export const Form = () => {
  const createdAt = moment().format();
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  const [name, setName] = useState('');
  const [phon, setPhon] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || phon === '') {
      return toast.warning('Please, enter all fields');
    }

    const existingContact = contacts.filter(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phon === phon
    );

    if (existingContact.length > 0) {
      const confirmMessage = `${name} or ${phon} already exists in contacts. Do you want to add it anyway?`;
      const shouldAddContact = window.confirm(confirmMessage);
      if (!shouldAddContact) {
        reset();
        return;
      }
    }

    dispatch(fetchAddContact({ createdAt, name, phon }));

    reset();
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;

      case 'phon':
        setPhon(event.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhon('');
  };
  return (
    <FormContainer>
      <FormSt onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="name..."
          onChange={handleChange}
          value={name}
        />
        <Input
          type="text"
          name="phon"
          placeholder="number..."
          onChange={handleChange}
          value={phon}
        />
        <Btn type="submit">Add Contact</Btn>
      </FormSt>
    </FormContainer>
  );
};
