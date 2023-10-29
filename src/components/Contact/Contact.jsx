import { useDispatch } from 'react-redux';
import { ContactItem, ContactBox } from './Contact.styled';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = evt => dispatch(deleteContact(evt.target.id));

  return (
    <ContactItem>
      <ContactBox>
        {name}: {phone}
      </ContactBox>
      <button id={id} type="button" onClick={handleDelete}>
        Delete
      </button>
    </ContactItem>
  );
};
