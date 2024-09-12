import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './BookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get('https://mockapi.io/api/v1/books');
    setBooks(response.data);
  };

  const handleAddBook = async (book) => {
    await axios.post('https://mockapi.io/api/v1/books', book);
    fetchBooks();
  };

  const handleEditBook = async (book) => {
    await axios.put(`https://mockapi.io/api/v1/books/${editingBook.id}`, book);
    setEditingBook(null);
    fetchBooks();
  };

  const handleDeleteBook = async (id) => {
    await axios.delete(`https://mockapi.io/api/v1/books/${id}`);
    fetchBooks();
  };

  const handleEditClick = (book) => {
    setEditingBook(book);
  };

  return (
    <div>
      <h2>Books</h2>
      <BookForm
        onSubmit={editingBook ? handleEditBook : handleAddBook}
        initialValues={editingBook || { title: '', author: '', isbn: '', publicationDate: '' }}
      />
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button onClick={() => handleEditClick(book)}>Edit</button>
            <button onClick={() => handleDeleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
