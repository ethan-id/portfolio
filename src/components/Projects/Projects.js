'use client';

import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from '@nextui-org/react';
import Image from 'next/image';
import BizGlimpseLogo from './Logo.png';
import DinderLogo from './dinder_logo_512.png';
import YahooScraperLogo from './yahoo-scraper.png';

export const Projects = () => {


    return (
      <section className='my-2'>
        <p className='text-2xl lg:text-6xl my-auto text-center leading-tight mb-12 font-bold'>Projects</p>

        <div className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <Card className="max-w-[400px] bg-gray-800 rounded-2xl p-4 w-5/6 h-80">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        className='w-12 lg:w-24 bg-black rounded-full'
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
                    <p>Get a glimpse of any publicly traded company via its ticker symbol.</p>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href="https://github.com/ethan-id/BizGlimpse"
                    >
                        View source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>

            <Card className="max-w-[400px] bg-gray-800 rounded-2xl p-4 w-5/6 h-80">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
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
                    <p>Get matched with local restaurants based on your preferences or your group's.</p>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href='https://github.com/ethan-id/Dinder'
                    >
                        View source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>

            <Card className="max-w-[400px] bg-gray-800 rounded-2xl p-4 w-5/6 h-80">
                <CardHeader className="flex gap-3">
                    <Image
                        alt="nextui logo"
                        className='w-12 lg:w-24'
                        src={YahooScraperLogo}
                    />
                    <div className="flex flex-col">
                        <p className="text-xl lg:text-3xl">Yahoo Finance Web Scraper</p>
                    </div>
                </CardHeader>
                <CardBody>
                    <p>Web-scraper used to gather over 500 data points, all scraped in real-time from Yahoo Finance.</p>
                </CardBody>
                <CardFooter>
                    <Link
                        isExternal
                        showAnchorIcon
                        href='https://github.com/ProjectGreenBoat/yahoo-finance-scraper'
                    >
                        View source code on GitHub.
                    </Link>
                </CardFooter>
            </Card>
        </div>
      </section>  
    );
}