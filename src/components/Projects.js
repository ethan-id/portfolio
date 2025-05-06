import {Card, CardHeader, CardBody, CardFooter, Chip, Link} from '@nextui-org/react';
import Image from 'next/image';
import BizGlimpseLogo from '@/images/Logo.png';
import DinderLogo from '@/images/dinder_logo_512.png';
import OpenAI from '@/images/openai.svg';
import Tree from '@/images/tree.png';
import ScrabbleSearch from '@/images/scrabble-search.png';
import ML from '@/images/senior-logo.png';
import {ProjectsTypewriter} from './projects-typewriter';

export const Projects = () => {
    const projects = [
        {
            name: 'Machine Learning on the Edge',
            logo: ML,
            description: 'ML-Powered Room Occupancy Tracking System for University Campuses',
            rounded: false,
            github: 'https://github.com/ethan-id/sddec25-05-mirror'
        },
        {
            name: 'Find Your Park',
            logo: Tree,
            description: 'See all of the National Park Services designated National Parks and learn more about them!',
            rounded: false,
            link: 'https://find-your-park.com',
            github: 'https://github.com/ethan-id/find-your-park'
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
        }
    ];

    return (
        <section
            className='bg-gradient-to-r from-blue-500 to-purple-600 py-20 mt-20'
            id='projects'
        >
            <div className='container mx-auto px-4'>
                <ProjectsTypewriter />
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
