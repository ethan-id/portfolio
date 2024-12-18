'use client';

import React from 'react';
import Image from 'next/image';
import ig from '../images/ig.png';
import styles from './NavBar.module.scss';
import growStyle from './LandingPage.module.scss';
import classNames from 'classnames';

const NavBar = () => {
    return (
        <section>
            <nav className='flex flex-col 2xl:flex-row justify-between mx-auto p-10 px-14 lg:px-28'>
                <div className='flex flex-row gap-8 justify-center md:justify-between items-center'>
                    <span className='self-center text-3xl sm:text-4xl font-semibold whitespace-nowrap text-white'>
                        {'<Ethan Hancock>'}
                    </span>
                    <a className='hidden md:block' href='#projects'>
                        Projects
                    </a>
                    <a className='hidden md:block' href='#github'>
                        GitHub
                    </a>
                    <a className='hidden md:block' href='#resume'>
                        Experience
                    </a>
                </div>

                <div className='flex flex-row justify-center gap-x-4'>
                    <a
                        target='_blank'
                        href='https://www.linkedin.com/in/hancockethan'
                    >
                        <img
                            className={classNames(
                                growStyle.grow,
                                'h-8 lg:h-12 w-8 lg:w-12'
                            )}
                            src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg'
                            alt='LinkedIn Logo'
                        />
                    </a>
                    <a
                        target='_blank'
                        href='https://www.instagram.com/ethan.idfk/'
                    >
                        <Image
                            src={ig}
                            className={classNames(
                                growStyle.grow,
                                'h-8 lg:h-12 w-8 lg:w-12'
                            )}
                            alt='Instagram Logo'
                        />
                    </a>
                </div>
            </nav>
            <div className={styles.navBorder}></div>
        </section>
    );
};

export default NavBar;
