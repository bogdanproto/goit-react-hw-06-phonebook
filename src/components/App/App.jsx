import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from './App.styled';

export const App = () => {
  return (
    <>
      <PhoneBook>
        <h2>Phonebook</h2>
        <ContactForm />
        <h3>Contacts</h3>
        <Filter />
        <ContactList />
      </PhoneBook>
      <ToastContainer />
    </>
  );
};
