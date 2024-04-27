import { useSelector } from "react-redux";

import Contact from "./Contact/Contact";

import { selectContacts, selectFilteredContacts } from "../../redux/selectors";

import css from "./ContactList.module.scss";

function ContactList() {
  const { loading, error } = useSelector(selectContacts);
  const contactItems = useSelector(selectFilteredContacts);
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
      {contactItems && !loading && (
        <ul className={css.contactsList}>
          {contactItems.map((contact) => {
            return <Contact key={contact.id} contact={contact} />;
          })}
        </ul>
      )}
    </>
  );
}

export default ContactList;
