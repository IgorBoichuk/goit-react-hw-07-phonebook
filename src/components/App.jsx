import { ContactForm } from './contact-form/ContactForm';
import { ContactList } from './contact-list/ContactList';
import { Filter } from './filter/Filter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import style from './style.module.css';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        minHeight: '100vh',
        width: '400px',
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '150px',
        color: '#010101',
      }}
    >
      <div>
        <h1 className={style.title}>Phonebook</h1>
        <ContactForm />
        <Filter />
      </div>
      <h2 className={style.text}>Contacts</h2>
      <ContactList />
    </div>
  );
}
