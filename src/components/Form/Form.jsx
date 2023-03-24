import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchAddContact } from 'redux/operations';

import { FormContainer, FormSt, Input, Btn } from './Form.styled';

export const Form = () => {
  const dispatch = useDispatch();
  
  const [name, setName] = useState('');
  const [phon, setPhon] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name === '' || phon === '') {
      return toast.warning('Please, enter all fields');
    }
    dispatch(fetchAddContact({ name, phon }));
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
