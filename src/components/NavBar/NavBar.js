'use client';

import React from 'react';
import Image from 'next/image';
import ig from './ig.png';
import styles from './NavBar.module.scss';
import classNames from 'classnames';

const NavBar = () => {
    return (
        <nav>
            <nav className="flex flex-col 2xl:flex-row justify-between mx-auto p-10 px-14 lg:px-28">
                <span className="self-center text-3xl sm:text-4xl font-semibold whitespace-nowrap dark:text-white">
                    {'<Ethan Hancock>'}
                </span>

                <div className="flex flex-row justify-center gap-x-4 mt-5">
                    <a href="https://www.linkedin.com/in/ethanhancock23">
                        <img className="h-8 lg:h-12 w-8 lg:w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn Logo"/>
                    </a>
                    <a href="https://www.instagram.com/ethan.idfk/">
                        <Image
                            src={ig}
                            className="h-8 lg:h-12 w-8 lg:w-12"
                            alt="Screenshot of my github profile"
                        />
                    </a>
                </div>

                {/* <button>
                    <svg className="h-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button> */}
            </nav>
            <div className={styles.navBorder}></div>
        </nav>
    )
}

export default NavBar;
