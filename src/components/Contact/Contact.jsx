import React from 'react';
import s from './Contact.module.css';

const Contact = ({ name, number, onDelete, id }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <p>{name}</p>
        <p>{number}</p>
      </div>

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
