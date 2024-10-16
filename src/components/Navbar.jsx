import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';

export default function Navbar({ setDarkTheme , darkTheme }) {
    return (
        <div className='p-5 pb-0 flex flex-wrap sm:justify-between 
        justify-center items-center border-b border-gray-200 
        dark:border-gray-700'>
            <div className='flex justify-between items-center space-x-5 w-screen'>
                <Link  to="/" >
                    <p className='text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded-xl dark:bg-gray-50 dark:text-gray-900'>
                        Goggle 🔎
                    </p>
                </Link>
                <button 
                    type='submit'
                    onClick={() => setDarkTheme(!darkTheme)}
                    className='text-xl dark:bg-gray-50 dark:text-gray-900 bg-white border rounded-full px-2 py-1 hover:shadow-lg' 
                >
                    {darkTheme ? '💡 Light' : '🌙 Dark'}
                </button>
            </div>
            <Search />
        </div>
    );
}
