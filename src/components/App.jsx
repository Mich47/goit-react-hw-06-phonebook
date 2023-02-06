import { ContactForm } from './Phonebook/ContactForm';
import { ContactList } from './Phonebook/ContactList';
import { Filter } from './Phonebook/Filter';
import { SectionContacts, SectionPhonebook } from './Phonebook/Sections';

export const App = () => {
  return (
    <>
      <SectionPhonebook>
        <ContactForm />
      </SectionPhonebook>
      <SectionContacts>
        <Filter />
        <ContactList />
      </SectionContacts>
    </>
  );
};
