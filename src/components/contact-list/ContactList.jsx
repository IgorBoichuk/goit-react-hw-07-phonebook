import style from '../style.module.css';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/createSlice';

import PropTypes from 'prop-types';

export const ContactList = ({ contacts, filter }) => {
  const dispatch = useDispatch();

  const onClickToDelete = event => {
    dispatch(deleteContact(event.target.id));
  };

  const newContactList = contacts.map(({ id, name, number }) => {
    if (filter.length === 0) {
      return (
        <li key={id} className={style.contactitem}>
          {name}: {number}
          <button className={style.deletebtn} id={id} onClick={onClickToDelete}>
            Delete
          </button>
        </li>
      );
    } else {
      let searchStatus = name.toLowerCase().indexOf(filter.toLowerCase());

      if (searchStatus === -1) {
        return null;
      } else {
        return (
          <li key={id} className={style.contactitem}>
            {name}: {number}
            <button
              className={style.deletebtn}
              id={id}
              onClick={onClickToDelete}
            >
              Delete
            </button>
          </li>
        );
      }
    }
  });

  return <ul className={style.contactlist}>{newContactList}</ul>;
};

ContactList.prototype = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
};
