import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeContact } from 'redux/contacts/contacts.slice';
import { setFilter } from 'redux/filter/filter.slice';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';
import { Section } from './Phonebook/Section';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const { value } = event.target;
    dispatch(setFilter(value));
  };

  const handleSubmitForm = (event, name, number) => {
    event.preventDefault();
    //Контакт вже існує, повертає false
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    //Інакше додає новий контакт, повертає true
    dispatch(addContact(name, number));
    return true;
  };

  const handleDeleteContact = id => dispatch(removeContact(id));

  const handleFilterContacts = query =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );

  const renderContacts = filter ? handleFilterContacts(filter) : contacts;

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmitForm} />
      </Section>
      <Section title="Contacts" headingLevel="h2">
        <Filter filter={filter} onChange={handleChangeFilter} />
        <ContactList contacts={renderContacts} onDelete={handleDeleteContact} />
      </Section>
    </>
  );
};
