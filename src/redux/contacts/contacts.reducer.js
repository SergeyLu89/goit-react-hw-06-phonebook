import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contact',

  initialState,

  reducers: {
    addContact(state, { payload }) {
      // state.contacts.push(action.payload);
      state.contacts = [...state.contacts, payload];
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// const initialState = {
//   contacts: JSON.parse(localStorage.getItem('contacts')) || [],
//   filter: '',
// };

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContact': {
//       return { ...state, contacts: [...state.contacts, action.payload] };
//     }
//     case 'contacts/deleteContact': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     case 'contacts/filteredContacts': {
//       return { ...state, filter: action.payload };
//     }
//     default:
//       return state;
//   }
// };

// export const addContact = payload => {
//   return {
//     type: 'contacts/addContact',
//     payload,
//   };
// };
// export const deleteContact = payload => {
//   return {
//     type: 'contacts/deleteContact',
//     payload,
//   };
// };

// export const filterContacts = payload => {
//   return {
//     type: 'contacts/filteredContacts',
//     payload,
//   };
// };
