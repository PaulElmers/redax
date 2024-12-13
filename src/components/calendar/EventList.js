import React from 'react';
import { useSelector } from 'react-redux';

const EventList = ({ selectedDate }) => {
    const events = useSelector((state) => state.calendar.events);
    const filteredEvents = events.filter((event) => event.date === selectedDate);

    return (
        <div>
            <h2>Events for {selectedDate || 'selected date'}</h2>
            <ul>
                {filteredEvents.map((event, index) => (
                    <li key={index}>{event.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
