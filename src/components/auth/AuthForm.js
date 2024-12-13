import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/slices/authSlice';

const AuthForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn, role } = useSelector((state) => state.auth);

    const handleLogin = () => {
        dispatch(login({ role: 'admin' }));
    };

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h2>Authorization</h2>
            {isLoggedIn ? (
                <>
                    <p>Role: {role}</p>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <button onClick={handleLogin}>Login as Admin</button>
            )}
        </div>
    );
};

export default AuthForm;
