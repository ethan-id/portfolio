import styles from './LandingPage.module.scss';
import React from 'react';
import Image from 'next/image'
import github from './github.png'
import Experience from '../Experience/Experience';

export const LandingPage = () => {
    return (
        <div className='flex flex-col mx-10 2xl:mx-60'>
            <div className='ml-20 my-60 leading-normal'>
                <div className='text-5xl lg:text-9xl font-bold'>
                    Hey, I'm Ethan!
                </div>
                <div className='text-4xl ml-20 mt-5 lg:text-8xl font-normal'>
                    I do a little coding sometimes
                </div>
            </div>

            <div className="flex flex-row m-auto mb-40 2xl:mt-40">
                <div className="mx-20 text-2xl lg:text-6xl my-auto text-center leading-tight">
                    Check out my <a className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-600" href="https://www.github.com/ethan-id">GitHub</a> to see my most recent projects!
                </div>
                <a 
                    href="https://www.github.com/ethan-id/"
                    className="mx-2 border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-xl"
                >
                    <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Image  
                            src={github}
                            className="dark:block w-full rounded w-[120vw]"
                            alt="Screenshot of my github profile"
                        />
                    </div>
                </a>
            </div>

            <Experience/>
        </div>
    )
}
