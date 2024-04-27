import { createSelector } from "@reduxjs/toolkit";

export const selectorFilter = (state) => state.filter.name;

export const selectContacts = (state) => state.contacts;

export const selectContactsItems = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContactsItems, selectorFilter],
  (contacts, searchWord) => {
    const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    return filteredContacts;
  }
);
