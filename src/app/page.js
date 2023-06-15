import styles from './page.module.css';
import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import NavBar from './NavBar';

export default function Home() {
    return (
        <>
            <NavBar/>
            <main className={styles.body}>
                <p>Hey, I'm Ethan!</p>
            </main>
            <Analytics />
        </>
    )
}
