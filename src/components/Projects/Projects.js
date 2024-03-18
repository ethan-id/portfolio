'use client';

import { Card, CardHeader, CardBody, CardFooter, Chip, Link } from '@nextui-org/react';
import Image from 'next/image';
import BizGlimpseLogo from './Logo.png';
import DinderLogo from './dinder_logo_512.png';
import YahooScraperLogo from './yahoo-scraper.png';
import OpenAI from './openai.svg';
import AI from './ai.jpg';
import classNames from 'classnames';
import styles from '../LandingPage/LandingPage.module.scss';
import { TypewriterEffect } from '../shared/TypeWriterEffect';

export const Projects = () => {

    return (
      <section className='shadow-inset flex flex-col gap-8 mt-40 py-20 border-none bg-gradient-to-r from-blue-300 to-purple-600'> 
        <TypewriterEffect 
            words={[{text: 'Projects', className: 'text-5xl lg:text-6xl my-auto text-center leading-tight mb-12 font-bold text-gray-900 dark:text-gray-900'}]}
            cursorClassName={'hidden'}
        />

        <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <Card isBlurred className={classNames(styles.grow, "shadow-2xl max-w-[400px] border-2 border-black rounded-2xl p-4 w-5/6 h-80 text-black")}>
                <CardHeader className="flex gap-3">
                    <Image
                        alt="BizGlimpse Logo"
                        className='w-12 lg:w-24 bg-white rounded-full'
                        src={BizGlimpseLogo}
                    />
                    <div className="flex flex-col">
                        <p className="text-xl lg:text-3xl">BizGlimpse</p>
                        <Link
                            isExternal
                            showAnchorIcon
                            href='https://biz-glimpse.vercel.app'
                        >
                            biz-glimpse.vercel.app
                        </Link>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>Get a glimpse of any publicly traded company via its ticker symbol, and chat with ChatGPT about the data (using GPT Connector)</p>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/ethan-id/BizGlimpse"
                    >
                        View source code on GitHub
                    </Link>
                </CardFooter>
            </Card>

            <Card isBlurred className={classNames(styles.grow, "shadow-2xl max-w-[400px] border-2 border-black rounded-2xl p-4 w-5/6 h-80 text-black")}>
                <CardHeader className="flex gap-3">
                    <Image
                        alt="Dinder Logo"
                        className='w-12 lg:w-24 bg-black rounded-full'
                        src={DinderLogo}
                    />
                    <div className="flex flex-col">
                        <p className="text-xl lg:text-3xl">Dinder</p>
                        <Link
                            isExternal
                            showAnchorIcon
                            href='https://www.youtube.com/watch?v=DoNjafJZINw&t=1s&ab_channel=EthanHancock'
                        >
                            View demo video
                        </Link>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>Get matched with local restaurants based on your preferences or your group's</p>
                    <Chip className='bg-amber-300 mt-5'>👑 Best Project Award 👑</Chip>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href='https://github.com/ethan-id/Dinder'
                    >
                        View source code on GitHub
                    </Link>
                </CardFooter>
            </Card>

            <Card isBlurred className={classNames(styles.grow, "shadow-2xl max-w-[400px] border-2 border-black rounded-2xl p-4 w-5/6 h-80 text-black")}>
                <CardHeader className="flex gap-3">
                    <Image
                        alt="Yahoo Finance Web Scraper Logo"
                        className='w-12 lg:w-24'
                        src={OpenAI}
                    />
                    <div className="flex flex-col">
                        <p className="text-xl lg:text-3xl">GPT Connector</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <p className='overflow-hidden'>A Flask API for an AI assistant built using R.A.G. with OpenAI's GPT-3.5-turbo for data queries; Deployed on Google Cloud Run for usage in BizGlimpse</p>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href='https://github.com/ethan-id/gpt-connector'
                    >
                        View source code on GitHub
                    </Link>
                </CardFooter>
            </Card>
        </div>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <Card isBlurred className={classNames(styles.grow, "shadow-2xl max-w-[400px] border-2 border-black rounded-2xl p-4 w-5/6 h-80 text-black")}>
                <CardHeader className="flex gap-3">
                    <Image
                        alt="Yahoo Finance Web Scraper Logo"
                        className='w-12 lg:w-24 rounded-full'
                        src={AI}
                    />
                    <div className="flex flex-col">
                        <p className="text-xl lg:text-3xl">ChatGPT Clone</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>User Interface built with NextJS and TypeScript allowing interaction with OpenAI's ChatGPT</p>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href='https://github.com/ethan-id/chat-gpt-clone'
                    >
                        View source code on GitHub
                    </Link>
                </CardFooter>
            </Card>

            <Card isBlurred className={classNames(styles.grow, "shadow-2xl max-w-[400px] border-2 border-black rounded-2xl p-4 w-5/6 h-80 text-black")}>
                <CardHeader className="flex gap-3">
                    <Image
                        alt="Yahoo Finance Web Scraper Logo"
                        className='w-12 lg:w-24'
                        src={YahooScraperLogo}
                    />
                    <div className="flex flex-col">
                        <p className="text-xl lg:text-3xl">Yahoo Finance Web Scraper</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>Web-scraper used to gather over 500 data points, all scraped in real-time from Yahoo Finance</p>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href='https://github.com/ProjectGreenBoat/yahoo-finance-scraper'
                    >
                        View source code on GitHub
                    </Link>
                </CardFooter>
            </Card>
        </div>
      </section>  
    );
}