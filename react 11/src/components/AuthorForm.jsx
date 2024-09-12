import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AuthorForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    birthDate: Yup.date().required('Birth Date is required'),
    biography: Yup.string().required('Biography is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error-message" />
        </div>
        <div>
          <label>Birth Date</label>
          <Field name="birthDate" type="date" />
          <ErrorMessage name="birthDate" component="div" className="error-message" />
        </div>
        <div>
          <label>Biography</label>
          <Field name="biography" as="textarea" />
          <ErrorMessage name="biography" component="div" className="error-message" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AuthorForm;
