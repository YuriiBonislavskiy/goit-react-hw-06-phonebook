import { useSelector } from 'react-redux';
import css from './ContactList.module.css';
import ContactsListItem from '../ContactsListItem';

const ContactsList = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.contactlist}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={css.contactitem} key={id}>
          <ContactsListItem
            id={id}
            name={name}
            number={number}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
