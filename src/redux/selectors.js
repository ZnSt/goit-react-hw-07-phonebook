export const selectFilter = state => state.filter;
export const selectLoading = state => state.isLoading;

export const getVisibleContacts = state => {
  const filterQuery = state.filter;
  return state.contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filterQuery) ||
      contact.phon.toLowerCase().includes(filterQuery)
  );
};
