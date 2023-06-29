'use client';

import React from 'react';
import styles from '../NavBar/NavBar.module.scss'
import classNames from 'classnames';

const Footer = () => {
    return (
        <nav className={classNames("border-t-8 border-solid border-blue-300 flex flex-col 2xl:flex-row justify-between mx-auto p-10 px-14 lg:px-28", styles.footerBorder)}>
            <span className="self-center text-3xl sm:text-4xl font-semibold whitespace-nowrap dark:text-white">
                {'</Ethan Hancock>'}
            </span>
        </nav>
    )
}

export default Footer;
