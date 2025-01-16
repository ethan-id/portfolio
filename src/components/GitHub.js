import {HeroHighlight, Highlight} from '@/components/shared/HeroHighlight';
import {motion} from 'framer-motion';
import Image from 'next/image';
import github from '@/images/github-profile.png';
import classNames from 'classnames';
import styles from '@/components/LandingPage.module.scss';

export const GitHub = () => {
    return (
        <div
            className='flex flex-col 2xl:flex-row'
            id='github'
        >
            <HeroHighlight>
                <motion.h1
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    whileInView={{
                        opacity: 1,
                        y: [20, -5, 0]
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1]
                    }}
                    className='text-2xl px-4 md:text-3xl lg:text-5xl font-bold text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-10 2xl:mx-60 my-64'
                >
                    Check my{' '}
                    <Highlight className='text-white'>
                        <a
                            target='_blank'
                            href='https://github.com/ethan-id'
                        >
                            GitHub
                        </a>
                    </Highlight>{' '}
                    for more
                    <a
                        target='_blank'
                        href='https://github.com/ethan-id'
                    >
                        <Image
                            src={github}
                            className={classNames(styles.grow, 'mt-12 dark:block rounded w-[100vw]')}
                            alt='Screenshot of my github profile'
                        />
                    </a>
                </motion.h1>
            </HeroHighlight>
        </div>
    );
};
