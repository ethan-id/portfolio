import React from 'react';
import {SkillRow} from '@/components/SkillRow';

export const Skills = () => {
    const skills = [
        {
            name: 'TypeScript',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            alt: 'TypeScript Logo'
        },
        {
            name: 'React',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            alt: 'React Logo'
        },
        {
            name: 'Redux',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            alt: 'Redux Logo'
        },
        {
            name: 'Java',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            alt: 'Java Logo'
        },
        {
            name: 'Tailwind',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
            alt: 'Tailwind Logo'
        },
        {
            name: 'Sass',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
            alt: 'Sass Logo'
        },
        {
            name: 'NextJS',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg',
            alt: 'NextJS Logo'
        },
        {
            name: 'MongoDB',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
            alt: 'MongoDB Logo'
        },
        {
            name: 'NodeJS',
            src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
            alt: 'NodeJS Logo'
        }
    ];

    return (
        <div className='mt-5'>
            <div className='flex justify-left text-2xl lg:text-3xl font-semibold lg:mb-5'>
                Technical Skills
            </div>
            <div className='flex flex-row'>
                <SkillRow skills={skills.slice(0, 3)} />

                <SkillRow skills={skills.slice(3, 6)} />

                <SkillRow skills={skills.slice(6, 9)} />
            </div>
        </div>
    );
};
