import styles from './NavBar.module.scss';

export const Footer = () => {
    return (
        <nav>
            <div className={styles.navBorder}></div>
            <nav className='flex flex-col 2xl:flex-row justify-between mx-auto p-10 px-14 lg:px-28'>
                <span className='self-center text-3xl sm:text-4xl font-semibold whitespace-nowrap dark:text-white'>
                    {'</Ethan Hancock>'}
                </span>
            </nav>
        </nav>
    );
};
