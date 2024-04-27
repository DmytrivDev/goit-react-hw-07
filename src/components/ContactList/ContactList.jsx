import { useSelector } from "react-redux";

import Contact from "./Contact/Contact";

import { selectContacts } from "../../redux/contactsSlice";
import { selectorFilter } from "../../redux/filtersSlice";

import css from "./ContactList.module.scss";

function ContactList() {
  const contacts = useSelector(selectContacts);
  const filterWord = useSelector(selectorFilter);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterWord.toLowerCase())
  );

  return (
    <>
      {visibleContacts.length > 0 ? (
        <ul className={css.contactsList}>
          {visibleContacts.map((contact) => {
            return (
              <Contact
                key={contact.id}
                contact={contact}
              />
            );
          })}
        </ul>
      ) : (
        <div className={css.nothingFound}>Nothing found</div>
      )}
    </>
  );
}

export default ContactList;
