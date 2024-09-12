import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BookForm = ({ onSubmit, initialValues }) => {
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    isbn: Yup.string().required('ISBN is required'),
    publicationDate: Yup.date().required('Publication Date is required'),
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
          <label>Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" component="div" className="error-message" />
        </div>
        <div>
          <label>Author</label>
          <Field name="author" type="text" />
          <ErrorMessage name="author" component="div" className="error-message" />
        </div>
        <div>
          <label>ISBN</label>
          <Field name="isbn" type="text" />
          <ErrorMessage name="isbn" component="div" className="error-message" />
        </div>
        <div>
          <label>Publication Date</label>
          <Field name="publicationDate" type="date" />
          <ErrorMessage name="publicationDate" component="div" className="error-message" />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default BookForm;
