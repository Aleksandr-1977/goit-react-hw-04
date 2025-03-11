import css from './Contacts.module.css';
import { FcBusinessman } from 'react-icons/fc';
import { FcPhone } from 'react-icons/fc';

const Contacts = ({ data: { id, name, number }, delContact }) => {
  return (
    <>
      <div className={css.text}>
        <p className={css.textItem}>
          <FcBusinessman size="20" />
          {name}
        </p>
        <p className={css.textItem}>
          <FcPhone size="20" />
          {number}
        </p>
      </div>

      <button type="button" className={css.btn} onClick={() => delContact(id)}>
        Delete
      </button>
    </>
  );
};
export default Contacts;
