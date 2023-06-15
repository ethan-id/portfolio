import styles from './page.module.css';
import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import NavBar from './NavBar';

export default function Home() {
    return (
        <>
            <NavBar/>
            <main className={styles.body}>
                <div className={styles.nameCont}>
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
            </main>
            <Analytics />
        </>
    )
}
