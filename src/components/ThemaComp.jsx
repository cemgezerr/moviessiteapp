'use client'
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import { FaRegLightbulb } from 'react-icons/fa';
import {BsLightbulbFill } from 'react-icons/bs';

const ThemaComp = () => {
    const [visible, setVisible] = useState(true);
    const { theme, setTheme } = useTheme();

    const handleClick = () => {
        setVisible(!visible);
    };

    return (
        <div>
            {visible ? (
                <FaRegLightbulb
                    onClick={() => { setTheme('light'); handleClick(); }}
                    size={25}
                    className='cursor-pointer'
                />
            ) : (
                <BsLightbulbFill
                    onClick={() => {setTheme('dark');handleClick();}}
                    size={25}
                    className='cursor-pointer'
                />
            )}
        </div>
    );
};

export default ThemaComp;
