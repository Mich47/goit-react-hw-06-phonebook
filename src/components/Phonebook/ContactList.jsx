import { PropTypes } from 'prop-types';
import { ContactsItem } from './ContactsItem';
import { ContactsListStyled } from './Phonebook.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ContactsListStyled>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onDelete={() => {
            onDelete(id);
          }}
        ></ContactsItem>
      ))}
    </ContactsListStyled>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
