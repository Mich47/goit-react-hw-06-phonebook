import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';
import { Section } from './Phonebook/Section';

const CONTACTS = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const contactsInLS = localStorage.getItem('contacts');
    if (contactsInLS) {
      return JSON.parse(contactsInLS);
    }
    return CONTACTS;
  });
  
  const [filter, setFilter] = useState('');
  
  const handleChangeFilter = event => {
    const { value } = event.target;
    setFilter(value);
  };
  
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmitForm = (event, name, number) => {
    event.preventDefault();
    return handleAddedContact(name, number);
  };

  const handleAddedContact = (name, number) => {
    //Контакт вже існує, повертає false
    if (contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    //Інакше додає новий контакт, повертає true
    setContacts(prev => [...prev, { id: nanoid(), name, number }]);
    return true;
  };

  const handleDeleteContact = id => setContacts(prev => prev.filter(item => item.id !== id));

  const handleFilterContacts = query => contacts.filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()));

  const renderContacts = filter
  ? handleFilterContacts(filter)
  : contacts;

  return (
    <>
      <Section title="Phonebook">
        <ContactForm onSubmit={handleSubmitForm} />
      </Section>
      <Section title="Contacts" headingLevel="h2">
        <Filter filter={filter} onChange={handleChangeFilter} />
        <ContactList
          contacts={renderContacts}
          onDelete={handleDeleteContact}
        />
      </Section>
    </>
  );
}
