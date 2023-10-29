import { Contact } from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { toFilter } from 'utils/filter';

export const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filtredContacts = toFilter(contacts, filter);

  return (
    <ContactListStyled>
      {contacts.length ? (
        filtredContacts.length ? (
          filtredContacts.map(({ id, name, phone }) => (
            <Contact key={id} id={id} name={name} phone={phone} />
          ))
        ) : (
          <p>Contacts not found</p>
        )
      ) : (
        <p>Contacts list is empty</p>
      )}
    </ContactListStyled>
  );
};
