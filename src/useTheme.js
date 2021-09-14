
import React, { useContext } from 'react';
import { CMThemeContext } from './CMTheme';

const useTheme = () => {
    const context = useContext(CMThemeContext);
    return context;
};

export { useTheme };