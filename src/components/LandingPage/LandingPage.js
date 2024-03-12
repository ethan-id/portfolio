import styles from './LandingPage.module.scss';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image'
import github from './github.png'
import me from './IMG_1317.jpg';
import Experience from '../Experience/Experience';
import {Projects} from '../Projects/Projects';

export const LandingPage = () => {
    return (
        <div className='flex flex-col'>
            <div className='mx-10 2xl:mx-60'>
                <div className='flex flex-col 2xl:my-20 2xl:flex-row justify-between'>
                    <div className='flex flex-col my-20 2xl:ml-20 leading-normal'>
                        <div className={classNames('text-4xl', 'lg:text-8xl', 'font-bold', styles.myText, styles.fadeDown1)}>
                            Hey, I'm Ethan!
                        </div>
                        <div className={classNames('text-2xl ml-20 mt-5 lg:mt-10 lg:text-7xl font-normal', styles.fadeDown2)}>
                            I do a little coding sometimes
                        </div>
                    </div>
                    <Image
                        src={me}
                        className={classNames(styles.grow, styles.fade, "outline outline-4 outline-amber-700 dark:block w-100 rounded-full mb-20 w-48 h-48 2xl:w-96 2xl:h-96 m-auto")}
                        alt="Photo of Ethan Hancock"
                    />
                </div>
            </div>

            <Projects/>

            <div className="flex flex-col 2xl:flex-row m-aut mx-10 2xl:mx-60 mb-20 2xl:mb-48 2xl:mt-40">
                <div className="text-xl lg:text-5xl my-auto text-center leading-tight">
                    Check out my <a className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600" href="https://www.github.com/ethan-id">GitHub</a> to see more details about my projects!
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
