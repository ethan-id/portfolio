'use client';

import {Card, CardHeader, CardBody, CardFooter, Chip, Link} from '@nextui-org/react';
import Image from 'next/image';
import BizGlimpseLogo from '@/images/Logo.png';
import DinderLogo from '@/images/dinder_logo_512.png';
import YahooScraperLogo from '@/images/yahoo-scraper.png';
import OpenAI from '@/images/openai.svg';
import AI from '@/images/ai.jpg';
import Tree from '@/images/tree.png';
import ScrabbleSearch from '@/images/scrabble-search.png';
import {TypewriterEffect} from './shared/TypeWriterEffect';

export const Projects = () => {
    const projects = [
        {
            name: 'National Parks Finder',
            logo: Tree,
            description: 'See all of the National Park Services designated National Parks and learn more about them!',
            rounded: false,
            link: 'https://national-parks-finder.vercel.app/',
            github: 'https://github.com/ethan-id/national-parks-finder'
        },
        {
            name: 'Dinder',
            logo: DinderLogo,
            description: "Get matched with local restaurants based on your preferences or your group's",
            link: 'https://www.youtube.com/watch?v=DoNjafJZINw&t=1s&ab_channel=EthanHancock',
            github: 'https://github.com/ethan-id/Dinder',
            award: '👑 Best Project Award 👑'
        },
        {
            name: 'Scrabble Search',
            logo: ScrabbleSearch,
            description:
                'Search across 170k+ valid scrabble words, see their point values, and calculate scores of your own words!',
            rounded: false,
            link: 'https://scrabble-search.vercel.app/',
            github: 'https://github.com/ethan-id/scrabble-search'
        },
        {
            name: 'BizGlimpse',
            logo: BizGlimpseLogo,
            description:
                'Get a glimpse of any publicly traded company via its ticker symbol, and chat with ChatGPT about the data (using GPT Connector)',
            link: 'https://biz-glimpse.vercel.app',
            github: 'https://github.com/ethan-id/BizGlimpse'
        },
        {
            name: 'GPT Connector',
            logo: OpenAI,
            description:
                "A Flask API for an AI assistant built using R.A.G. with OpenAI's GPT-3.5-turbo for data queries; Deployed on Google Cloud Run for usage in BizGlimpse",
            github: 'https://github.com/ethan-id/gpt-connector'
        },
        {
            name: 'Yahoo Finance Web Scraper',
            logo: YahooScraperLogo,
            rounded: false,
            description: 'Web-scraper used to gather over 500 data points, all scraped in real-time from Yahoo Finance',
            github: 'https://github.com/ProjectGreenBoat/yahoo-finance-scraper'
        }
    ];

    return (
        <section
            className='bg-gradient-to-r from-blue-500 to-purple-600 py-20 mt-20'
            id='projects'
        >
            <div className='container mx-auto px-4'>
                <TypewriterEffect
                    words={[
                        {
                            text: 'Projects',
                            className: 'text-5xl lg:text-6xl font-bold text-white text-center mb-12'
                        }
                    ]}
                    cursorClassName={'hidden'}
                />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-xl overflow-hidden transform transition duration-300 hover:scale-105'
                        >
                            <CardHeader className='flex items-center gap-4 p-6'>
                                <Image
                                    alt={`${project.name} Logo`}
                                    className={` w-16 h-16 ${project.rounded === false ? '' : 'rounded-full'}`}
                                    src={project.logo || '/placeholder.svg'}
                                />
                                <div>
                                    <h3 className='text-2xl font-semibold text-white'>{project.name}</h3>
                                    {project.link && (
                                        <Link
                                            isExternal
                                            showAnchorIcon
                                            href={project.link}
                                            className='text-blue-200 hover:text-blue-100'
                                        >
                                            View Project
                                        </Link>
                                    )}
                                </div>
                            </CardHeader>
                            <CardBody className='p-6'>
                                <p className='text-white text-opacity-80'>{project.description}</p>
                                {project.award && (
                                    <Chip className='bg-yellow-400 text-gray-900 mt-4 font-semibold'>
                                        {project.award}
                                    </Chip>
                                )}
                            </CardBody>
                            <CardFooter className='p-6'>
                                <Link
                                    isExternal
                                    showAnchorIcon
                                    href={project.github}
                                    className='text-blue-200 hover:text-blue-100'
                                >
                                    View source code on GitHub
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
