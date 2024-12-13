import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeNotification } from '../../store/slices/notificationSlice';

const NotificationList = () => {
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.notifications.items);

    useEffect(() => {
        const timer = setInterval(() => {
            if (notifications.length) {
                dispatch(removeNotification());
            }
        }, 3000);

        return () => clearInterval(timer);
    }, [notifications, dispatch]);

    return (
        <ul>
            {notifications.map((notif, index) => (
                <li key={index}>{notif}</li>
            ))}
        </ul>
    );
};

export default NotificationList;
