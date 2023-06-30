import styles from './LandingPage.module.scss';
import React from 'react';
import classNames from 'classnames';
import Image from 'next/image'
import github from './github.png'
import me from './IMG_1317.jpg';
import Experience from '../Experience/Experience';

export const LandingPage = () => {
    return (
        <div className='flex flex-col mx-10 2xl:mx-60'>
            <div className='flex flex-col 2xl:my-20 2xl:flex-row justify-between'>
                <div className='flex flex-col my-20 2xl:ml-20 leading-normal'>
                    <div className={classNames('text-4xl', 'lg:text-8xl', 'font-bold', styles.myText,)}>
                        Hey, I'm Ethan!
                    </div>
                    <div className='text-2xl ml-20 mt-5 lg:mt-10 lg:text-7xl font-normal'>
                        I do a little coding sometimes
                    </div>
                </div>
                <Image
                    src={me}
                    className="dark:block w-100 rounded-full mb-20 w-48 h-48 2xl:w-96 2xl:h-96 m-auto"
                    alt="Screenshot of my github profile"
                />
            </div>

            <div className="flex flex-col 2xl:flex-row m-auto mb-20 2xl:mb-48 2xl:mt-40">
                <div className="text-2xl lg:text-6xl my-auto text-center leading-tight">
                    Check out my <a className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600" href="https://www.github.com/ethan-id">GitHub</a> to see my most recent projects!
                </div>
                <a
                    href="https://www.github.com/ethan-id/"
                    className="mx-2 mt-2 border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-xl"
                >
                    <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Image
                            src={github}
                            className="dark:block w-full rounded w-[125vw]"
                            alt="Screenshot of my github profile"
                        />
                    </div>
                </a>
            </div>

            <Experience/>
        </div>
    )
}
