// import { useState, useEffect } from 'react';
import css from './App.module.css';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.contactsStore.filter);

  const onAddContactForm = userData => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === userData.name.toLowerCase()
    );
    if (isExist) {
      alert(`${userData.name} is already in contacts`);
      return;
    }

    const addContactAction = { type: 'contacts/addContact', payload: userData };
    dispatch(addContactAction);
  };

  const onAddFilterChange = filterData => {
    const filterContacts = {
      type: 'contacts/filteredContacts',
      payload: filterData,
    };
    dispatch(filterContacts);
  };

  const filterElements = contacts => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const onDeleteBtnClick = id => {
    const deleteContactAction = { type: 'contacts/deleteContact', payload: id };
    dispatch(deleteContactAction);
  };

  const filteredContacts = filterElements(contacts);
  return (
    <div className={css.section}>
      <h1>Phonebook</h1>
      <ContactForm onAddContactForm={onAddContactForm} />
      <h2>Contacts</h2>
      <Filter onAddFilterChange={onAddFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteBtnClick={onDeleteBtnClick}
      />
    </div>
  );
};
