import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { addContact } from "../../redux/contactsSlice";

import css from "./ContactForm.module.scss";

function ContactForm() {
  const dispatch = useDispatch();

  const defaultValues = {
    name: "",
    phone: "",
  };

  const nameId = useId();
  const phoneId = useId();

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .trim()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const hendleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.phone,
    };

    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={hendleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={phoneId}>Number</label>
          <Field name="phone" id={phoneId} />
          <ErrorMessage name="phone" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
