import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contacts/contacts.slice';
import { ContactsItem } from './ContactsItem';
import { ContactsListStyled } from './Phonebook.styled';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(removeContact(id));

  const handleFilterContacts = query =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

  const renderContacts = filter ? handleFilterContacts(filter) : contacts;
  return (
    <ContactsListStyled>
      {renderContacts.map(({ id, name, number }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          onDelete={() => {
            handleDeleteContact(id);
          }}
        ></ContactsItem>
      ))}
    </ContactsListStyled>
  );
};
