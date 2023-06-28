import styles from './LandingPage.module.scss';
import React from 'react';
import Image from 'next/image'
import github from './github.png'
import Experience from '../Experience/Experience';

export const LandingPage = () => {
    return (
        <div className='flex flex-col mx-60'>
            <div className='mt-20'>
                <div className='text-9xl font-bold leading-tight'>
                    Hey, I'm Ethan!
                </div>
                <div className='text-8xl font-normal leading-tight'>
                    I do a little coding sometimes
                </div>
            </div>

            <div className="flex flex-row m-auto mt-40">
                <div className="text-6xl m-auto h-40 mt-60 mx-20 leading-tight">
                    Check out my GitHub!
                </div>
                <a 
                    href="https://www.github.com/ethan-id/"
                    class="mb-20 mx-20 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-xl"
                >
                    <div class="rounded-lg overflow-hidden bg-white dark:bg-gray-800">
                        <Image  
                            src={github}
                            className="dark:block w-full rounded-l w-[80vw]"
                            alt="Screenshot of my github profile"
                        />
                    </div>
                </a>
            </div>

            <Experience/>
        </div>
    )
}
