import { useSelector } from "react-redux";

import Contact from "./Contact/Contact";

import { selectFilteredContacts } from "../../redux/selectors";

import css from "./ContactList.module.scss";

function ContactList() {
  const { items, loading, error } = useSelector(selectFilteredContacts);
  // const filterWord = useSelector(selectorFilter);

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filterWord.toLowerCase())
  // );

  return (
    <>
      {loading && (
        <div className={css.contactsList}>Contacts is loading...</div>
      )}
      {error && !loading && (
        <div className={css.contactsList}>{error}</div>
      )}
      {items && !loading && (
        <ul className={css.contactsList}>
          {items.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      )}
    </>
  );
}

export default ContactList;
