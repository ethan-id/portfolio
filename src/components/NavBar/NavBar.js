import React from 'react';

const NavBar = () => {
    return (
        <nav className="border-b-2 border-solid border-blue-300 flex flex-wrap items-center justify-between mx-auto p-10 px-14 lg:px-28">
            <span className="self-center text-3xl sm:text-4xl font-semibold whitespace-nowrap dark:text-white">
                Ethan Hancock
            </span>

            {/* <button>
                <svg className="h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                </svg>
            </button> */}
        </nav>
    )
}

export default NavBar;
