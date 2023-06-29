import styles from './LandingPage.module.scss';
import React from 'react';
import Image from 'next/image'
import github from './github.png'
import Experience from '../Experience/Experience';

export const LandingPage = () => {
    return (
        <div className='flex flex-col mx-10 lg:mx-60'>
            <div className='mt-20 leading-normal'>
                <div className='text-5xl lg:text-9xl font-bold'>
                    Hey, I'm Ethan!
                </div>
                <div className='text-4xl lg:text-8xl font-normal'>
                    I do a little coding sometimes
                </div>
            </div>

            <div className="flex flex-row m-auto mt-10 lg:mt-40">
                <div className="text-2xl lg:text-6xl lg:h-40 lg:mt-60 lg:mx-20 my-auto leading-tight">
                    Check out my GitHub!
                </div>
                <a 
                    href="https://www.github.com/ethan-id/"
                    class="mx-2 border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-xl"
                >
                    <div class="rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Image  
                            src={github}
                            className="dark:block w-full rounded-l w-100"
                            alt="Screenshot of my github profile"
                        />
                    </div>
                </a>
            </div>

            <Experience/>
        </div>
    )
}
