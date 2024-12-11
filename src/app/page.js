import styles from './page.module.scss';
import React from 'react';
import {Analytics} from '@vercel/analytics/react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import {LandingPage} from '@/components/LandingPage';

export default function Home() {
    return (
        <div className={styles.app}>
            <NavBar />
            <LandingPage />
            <Footer />
            <Analytics />
        </div>
    );
}
