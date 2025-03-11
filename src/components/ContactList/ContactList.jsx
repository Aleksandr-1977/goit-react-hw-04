import css from './ContactList.module.css';
import Contacts from '../Contact/Contacts';

const ContactList = ({ contacts, delContact }) => {
  if (contacts.length === 0)
    return <p className={css.text}>Contact not found</p>;
  else
    return (
      <ul className={css.container}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contacts}>
            <Contacts data={contact} delContact={delContact} />
          </li>
        ))}
      </ul>
    );
};
export default ContactList;
