'use client';

import styles from './LandingPage.module.scss';
import {useEffect, useState} from 'react';
import classNames from 'classnames';
import Image from 'next/image'
import github from './github.png'
import me from '/public/me.png';
import Experience from '../Experience/Experience';
import {Projects} from '../Projects/Projects';
import {motion} from 'framer-motion';
import {HeroHighlight, Highlight} from '../shared/HeroHighlight';

export const LandingPage = () => {
    const words = ['cool', 'innovative', 'aesthetic', 'useful', 'powerful', 'helpful', 'creative', 'efficient', 'scalable', 'intuitive', 'dynamic', 'robust'];
    const [index, setIndex] = useState(0);

    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade(true);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className='flex flex-col'>
            <div className='px-10 2xl:px-60'>
                <div className='flex flex-col gap-48 my-10 2xl:my-10 md:flex-row items-center'>
                    <div className='flex flex-col leading-normal'>
                        <p className={classNames('text-6xl', 'lg:text-8xl', 'font-bold', styles.myText, styles.fadeDown1)}>
                            Hey, I'm Ethan!
                        </p>
                        <div className={classNames('text-4xl ml-10 md:ml-20 mt-5 lg:mt-10 lg:text-6xl font-normal', styles.fadeDown2)}>
                            I love building <p className={classNames('text-purple-800', fade ? styles['fade-in'] : styles['fade-out'])}>{words[index]}</p> software
                        </div>
                    </div>
                    <div className={classNames(styles.fade, 'flex flex-col justify-center items-center w-5/6')}>
                        <Image
                            src={me}
                            className='dark:block rounded-3xl w-5/6'
                            alt="Photo of Ethan Hancock"
                        />
                    </div>
                </div>
            </div>

            <Projects/>

            <div className="flex flex-col 2xl:flex-row h-[70vh]">
                <HeroHighlight>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: [20, -5, 0],
                        }}
                        transition={{
                            duration: 0.5,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-2xl px-4 md:text-3xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-10 2xl:mx-60 mb-20 2xl:mb-48 mt-20 2xl:mt-40"
                    >
                        Check my{" "}
                        <Highlight className="text-white">
                            <a target='_blank' href='https://github.com/ethan-id'>GitHub</a>
                        </Highlight>
                        {" "}for more 
                        <Image
                            src={github}
                            className={classNames(styles.grow,"mt-12 dark:block rounded w-[100vw]")}
                            alt="Screenshot of my github profile"
                        />
                    </motion.h1>
                </HeroHighlight>
            </div>

            <Experience/>
        </div>
    )
}
