import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import initialContacts from './contacts.json';

function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContact = localStorage.getItem('Save contacts');
    return saveContact ? JSON.parse(saveContact) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    setContacts(prevContact => {
      return [...prevContact, newContact];
    });
  };

  const delContact = contactId => {
    setContacts(prevContact => {
      return prevContact.filter(contact => contact.id !== contactId);
    });
  };

  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('Save contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filterContact} delContact={delContact} />
    </div>
  );
}

export default App;
