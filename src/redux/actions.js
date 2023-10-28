import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/AddContact', newContact => {
  return {
    payload: {
      ...newContact,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contacts/DeleteContact');

export const setFilter = createAction('filter/setFilter');
