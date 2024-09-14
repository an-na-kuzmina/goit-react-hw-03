import { useEffect, useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import initialContacts from './initialContacts.json';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const data = window.localStorage.getItem('contacts');
    if (data !== null) {
      return JSON.parse(data);
    }
    return initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }),
    [contacts];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <div className="appWrap">
        <h1 className="appTitle">Phonebook</h1>
        <ContactForm />
        <SearchBox value={filter} onSearch={setFilter} />
        <ContactList contacts={filteredContacts} />
      </div>
    </>
  );
};

export default App;
