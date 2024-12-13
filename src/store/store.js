import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';
import bookReducer from './slices/bookSlice';
import profileReducer from './slices/profileSlice';
import calendarReducer from './slices/calendarSlice';
import authReducer from './slices/authSlice';
import notificationReducer from './slices/notificationSlice';
import langReducer from './slices/langSlice';
import adminReducer from './slices/adminSlice';

const store = configureStore({
    reducer: {
        todos: todoReducer,
        books: bookReducer,
        profile: profileReducer,
        calendar: calendarReducer,
        auth: authReducer,
        notifications: notificationReducer,
        lang: langReducer,
        admin: adminReducer,
    },
});

export default store;
