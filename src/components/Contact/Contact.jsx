import s from './Contact.module.css';
import { ImPhone } from 'react-icons/im';
import { FaUser } from 'react-icons/fa6';

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <p className={s.name}>
          <FaUser className={s.icon} size="20" />
          {name}
        </p>
        <p>
          <ImPhone className={s.icon} size="20" />
          {number}
        </p>
      </div>

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
