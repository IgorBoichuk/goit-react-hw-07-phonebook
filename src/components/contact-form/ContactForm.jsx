import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import style from '../style.module.css';
import { addContact } from 'redux/operations';
import { selectAllContacts } from 'redux/selectors';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const contacts = useSelector(selectAllContacts);

  const onHandleAddBtn = () => {
    let chackName = false;

    contacts.forEach(contact => {
      if (contact.name === name) {
        chackName = true;
      }
    });

    if (chackName) {
      alert(`${name} is olready in contacts`);
    } else {
      dispatch(addContact({ name, phone }));
      reset();
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div className={style.wrapper}>
      <form action="" className={style.form}>
        <label htmlFor="name" className={style.label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={style.forminput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number" className={style.label}>
          Number
        </label>
        <input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          className={style.forminput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button
          type="button"
          name="addButton"
          onClick={onHandleAddBtn}
          className={style.button}
        >
          Add contact
        </button>
      </form>
    </div>
  );
}
