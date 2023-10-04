import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactsListItem.module.css';
import { deleteContact } from 'Redux/contactsSlice';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <span>
      {name}: {number}
      <button
        className={css.deletebutton}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </span>
  );
};

ContactsListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
