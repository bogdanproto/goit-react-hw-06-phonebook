import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        return { contacts: [...state.contacts, action.payload] };
      },
      prepare(obj) {
        return {
          payload: {
            ...obj,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return {
        contacts: state.contacts.filter(({ id }) => id !== action.payload),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
