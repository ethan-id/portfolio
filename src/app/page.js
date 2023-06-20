import './globals.scss';
import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import NavBar from './NavBar';
import styles from './page.module.scss';

export default function Home() {
    const classnames = require('classnames');

    return (
        <>
            <main>
                <div className={styles.landingPage}>
                    <NavBar/>
                    <div className={classnames('d-flex flex-row m-auto', styles.landingContent)}>
                        <div className={classnames('fw-bold w-25 m-auto w-100', styles.words)}>
                            Software
                            &nbsp;&nbsp;&nbsp;&nbsp;Engineer
                        </div>
                        <div className='m-auto'>
                            <img
                                alt="picture of garfield sitting in front of a macbook"
                                className='rounded-circle'
                                src="https://www.github.com/ethan-id.png"
                            />
                        </div>
                    </div>
                </div>

                {/*<div id='projects'>*/}
                {/*    My projects*/}
                {/*</div>*/}
            </main>
            <Analytics />
        </>
    )
}
