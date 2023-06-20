import styles from './LandingPage.module.css';
import React from 'react';

export const LandingPage = () => {
    return (
        <div className='grid grid-rows-2 md:grid-rows-2 lg:flex lg:mx-auto lg:px-40'>
            <div className={styles.software}>
                Software
                &nbsp;&nbsp;&nbsp;&nbsp;Engineer
            </div>
            <img
                alt="picture of garfield sitting in front of a macbook"
                className="rounded-full"
                src="https://www.github.com/ethan-id.png"
            />
        </div>
    )
}
