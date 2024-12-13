import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../store/slices/bookSlice';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author) {
            dispatch(addBook({ title, author }));
            setTitle('');
            setAuthor('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default BookForm;
