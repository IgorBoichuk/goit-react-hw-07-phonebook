import { ContactForm } from './contact-form/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';

import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import style from './style.module.css';

export function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('localUserContacts'));
    if (storedTodos) {
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('localUserContacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div
      style={{
        height: '100vh',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '150px',
        color: '#010101',
      }}
    >
      <div>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm contacts={contacts} />
        <Filter />
      </div>
      <h2 className={style.text}>Contacts</h2>
      <ContactList contacts={contacts} filter={filter} />
    </div>
  );
}
