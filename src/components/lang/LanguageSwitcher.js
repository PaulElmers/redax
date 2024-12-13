import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../store/slices/langSlice';

const LanguageSwitcher = () => {
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.lang.language);

    return (
        <div>
            <h2>Language: {currentLanguage}</h2>
            <button onClick={() => dispatch(setLanguage('en'))}>English</button>
            <button onClick={() => dispatch(setLanguage('uk'))}>Українська</button>
        </div>
    );
};

export default LanguageSwitcher;
