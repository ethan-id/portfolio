import React from 'react';

const NavBar = () => {
    return (
        <nav className="flex flex-wrap items-center justify-between mx-auto p-10 px-24">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ethan Hancock</span>

            <svg className="h-12" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
        </nav>
    )
}

export default NavBar;
