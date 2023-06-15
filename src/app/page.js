import styles from './page.module.css'
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
    return (
        <>
        <main className={styles.main}>
            <p>Hey, I'm Ethan!</p>
        </main>
        <Analytics />
        </>
    )
}
