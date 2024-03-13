import styles from './LandingPage.module.scss';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image'
import github from './github.png'
import me from './me.png';
import Experience from '../Experience/Experience';
import {Projects} from '../Projects/Projects';

export const LandingPage = () => {
    return (
        <div className='flex flex-col'>
            <div className='mx-10 2xl:mx-60'>
                <div className='flex flex-col gap-16 my-10 2xl:my-20 md:flex-row justify-between items-center'>
                    <div className='flex flex-col leading-normal'>
                        <p className={classNames('text-4xl', 'lg:text-8xl', 'font-bold', styles.myText, styles.fadeDown1)}>
                            Hey, I'm Ethan!
                        </p>
                        <p className={classNames('text-2xl ml-10 md:ml-20 mt-5 lg:mt-10 lg:text-7xl font-normal', styles.fadeDown2)}>
                            I build precise, engaging, accessible software.
                        </p>
                    </div>
                    <div className={classNames(styles.fade, 'flex flex-col justify-center items-center')}>
                        <Image
                            src={me}
                            className='dark:block rounded-3xl'
                            alt="Photo of Ethan Hancock"
                        />
                        <p className='text-ld mt-2'>There I am!</p>
                    </div>
                </div>
            </div>

            <Projects/>

            <div className="flex flex-col 2xl:flex-row m-aut mx-10 2xl:mx-60 mb-20 2xl:mb-48 mt-20 2xl:mt-40">
                <div className="text-xl lg:text-5xl my-auto text-center leading-tight">
                    Check my <a className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600" href="https://www.github.com/ethan-id">GitHub</a> to see more about my projects!
                </div>
                <a
                    href="https://www.github.com/ethan-id/"
                    className="shadow-[0px_0px_100px_15px_rgba(42,14,128,0.8)] mx-2 mt-8 border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-xl"
                >
                    <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Image
                            src={github}
                            className={classNames(styles.grow,"dark:block rounded w-[100vw]")}
                            alt="Screenshot of my github profile"
                        />
                    </div>
                </a>
            </div>

            <Experience/>
        </div>
    )
}
