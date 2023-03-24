import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contactsList',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );

      //   return {
      //     ...state,
      //     contacts: state.contacts.filter(item => item.id !== action.payload),
      //   };
    },

    setFilter(state, action) {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
