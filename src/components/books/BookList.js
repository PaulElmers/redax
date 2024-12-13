import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../../store/slices/bookSlice';

const BookList = () => {
    const books = useSelector((state) => state.books.list);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Books</h2>
            <ul>
                {books.map((book, index) => (
                    <li key={index}>
                        {book.title} by {book.author}
                        <button onClick={() => dispatch(removeBook(book.title))}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookList;
