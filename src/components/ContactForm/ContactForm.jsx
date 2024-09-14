import React from 'react';
import s from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

const ContactForm = () => {
  return (
    <div>
      <Formik>
        <Form></Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
