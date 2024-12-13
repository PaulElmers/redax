import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, undoChanges } from '../../store/slices/profileSlice';

const UserProfileForm = () => {
    const profile = useSelector((state) => state.profile.data);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(profile);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        dispatch(updateProfile(formData));
    };

    const handleUndo = () => {
        setFormData(profile);
        dispatch(undoChanges());
    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleUndo}>Undo</button>
        </div>
    );
};

export default UserProfileForm;
