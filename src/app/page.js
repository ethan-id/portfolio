import styles from './page.module.scss'
import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import NavBar from '@/components/NavBar/NavBar';
import {LandingPage} from '@/components/LandingPage/LandingPage';

export default function Home() {
    return (
        <div className={styles.app}>
            <NavBar/>
            <LandingPage/>
            <Analytics />
        </div>
    )
}
