import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);
  const [editingAuthor, setEditingAuthor] = useState(null);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    const response = await axios.get('https://mockapi.io/api/v1/authors');
    setAuthors(response.data);
  };

  const handleAddAuthor = async (author) => {
    await axios.post('https://mockapi.io/api/v1/authors', author);
    fetchAuthors();
  };

  const handleEditAuthor = async (author) => {
    await axios.put(`https://mockapi.io/api/v1/authors/${editingAuthor.id}`, author);
    setEditingAuthor(null);
    fetchAuthors();
  };

  const handleDeleteAuthor = async (id) => {
    await axios.delete(`https://mockapi.io/api/v1/authors/${id}`);
    fetchAuthors();
  };

  const handleEditClick = (author) => {
    setEditingAuthor(author);
  };

  return (
    <div>
      <h2>Authors</h2>
      <AuthorForm
        onSubmit={editingAuthor ? handleEditAuthor : handleAddAuthor}
        initialValues={editingAuthor || { name: '', birthDate: '', biography: '' }}
      />
      <ul>
        {authors.map(author => (
          <li key={author.id}>
            {author.name}
            <button onClick={() => handleEditClick(author)}>Edit</button>
            <button onClick={() => handleDeleteAuthor(author.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
