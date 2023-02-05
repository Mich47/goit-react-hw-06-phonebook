import { PropTypes } from 'prop-types';
import { Box } from 'components/Box';
import {
  ButtonStyled,
  FormStyled,
  InputStyled,
  LabelStyled,
} from './Phonebook.styled';
import { useState } from 'react';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState(() => localStorage.getItem('name') ?? '');
  const changeName = event => {
    const { value } = event.target;
    localStorage.setItem('name', value);
    setName(value);
  };

  const [number, setNumber] = useState(
    () => localStorage.getItem('number') ?? ''
  );
  const changeNumber = event => {
    const { value } = event.target;
    localStorage.setItem('number', value);
    setNumber(value);
  };

  const clearForm = () => {
    setName('');
    setNumber('');
    localStorage.removeItem('name');
    localStorage.removeItem('number');
  };

  const clearName = () => {
    setName('');
    localStorage.removeItem('name');
  };

  return (
    <FormStyled
      onSubmit={event => {
        onSubmit(event, name, number) ? clearForm() : clearName();
      }}
    >
      <Box display="flex" flexDirection="column">
        <LabelStyled htmlFor="name">Name</LabelStyled>
        <InputStyled
          id="name"
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          autoFocus
          onChange={changeName}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <LabelStyled htmlFor="number">Number</LabelStyled>
        <InputStyled
          id="number"
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={changeNumber}
        />
      </Box>
      <ButtonStyled type="submit">Add contact</ButtonStyled>
    </FormStyled>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
