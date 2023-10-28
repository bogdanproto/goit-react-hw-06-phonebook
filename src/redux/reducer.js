import initialStateContacts from '../data/contacts.json';
import { addContact, deleteContact, setFilter } from './actions';

export const contactsReducer = (state = initialStateContacts, action) => {
  switch (action.type) {
    case addContact.type:
      return [...state, action.payload];

    case deleteContact.type:
      return state.filter(({ id }) => id !== action.payload);
    default:
      return state;
  }
};

export const filterReducer = (state = '', action) => {
  if (action.type === setFilter.type) {
    state = action.payload;
  }
  return state;
};
