import style from '../style.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'redux/operations';
import {
  selectAllContacts,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectAllContacts);
  const loading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  const filtered = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  const onClickToDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  return (
    <ul className={style.contactlist}>
      {loading ? (
        <h1>Loadind</h1>
      ) : (
        filtered.map(contact => (
          <li key={contact.id} className={style.contactitem}>
            {contact.name}: {contact.phone}
            <button
              className={style.deletebtn}
              id={contact.id}
              onClick={onClickToDelete}
            >
              Delete
            </button>
          </li>
        ))
      )}
    </ul>
  );
};
