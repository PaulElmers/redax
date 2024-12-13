import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent } from '../../store/slices/calendarSlice';

const EventForm = () => {
    const dispatch = useDispatch();
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (date && description) {
            dispatch(addEvent({ date, description }));
            setDate('');
            setDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Event</h2>
            <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Event description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default EventForm;
