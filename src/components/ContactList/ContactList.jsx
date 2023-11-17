import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contacts/contacts.reducer';
import { selectContacts, selectFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onDeleteBtnClick = id => {
    dispatch(deleteContact(id));
  };

  const filterElements = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = filterElements(contacts);
  return (
    <ul className={css.contactsList}>
      {filteredContacts.map(contact => {
        return (
          <li className={css.contactsListItem} key={contact.id}>
            <p className={css.listItemTextcontent}>
              {contact.name}: {contact.number}{' '}
            </p>

            <button
              type="button"
              onClick={() => {
                onDeleteBtnClick(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
