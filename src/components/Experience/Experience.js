import React from 'react';
import Image from 'next/image'
import deere from '../../images/deere-logo.png';
import promax from '../../images/promax-logo.jpeg';

const Experience = () => {
    return (
        <div className='mx-10 2xl:mx-60 lg:mt-40 lg:mb-20'>
            <div className="text-2xl text-center lg:text-7xl font-normal leading-relaxed">
                Want to hire me?<br/>
                <div className='mt-2 lg:mt-5 font-bold'>
                    Here's what I can offer
                </div>
            </div>
            <hr className='mt-4'/>

            <div className='md:mx-40 lg:mx-56 mt-10'>
                <div className="flex justify-left text-2xl lg:text-5xl font-semibold lg:mb-5">
                    Previous Experience
                </div>
                <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <Image
                                src={deere}
                                className={"h-8 lg:h-16 w-8 lg:w-16 mix-blend-screen m-auto"}
                                alt="John Deere Logo"
                            />
                            <div className="min-w-0 flex-auto m-auto">
                                <p className="text-lg lg:text-2xl font-semibold">John Deere</p>
                            </div>
                        </div>
                        <div className="align-center">
                            <p className="text-sm lg:text-2xl text-right font-semibold">Part Time Student Software Engineer</p>
                            <p className="flex mt-1 text-xs lg:text-lg justify-end">May 2021 - Present</p>
                        </div>
                    </li>
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <Image
                                src={promax}
                                className={"h-8 lg:h-16 w-8 lg:w-16 rounded-lg mix-blend-screen m-auto"}
                                alt="ProMax Logo"
                            />
                            <div className="min-w-0 align-center m-auto">
                                <p className="text-lg lg:text-2xl font-semibold">ProMax</p>
                            </div>
                        </div>
                        <div className="align-center">
                            <p className="text-sm lg:text-2xl text-right font-semibold">Software Engineering Intern</p>
                            <p className="flex mt-1 text-xs lg:text-lg justify-end">Jan 2020 - Apr 2020</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Education */}
            <div className='md:mx-40 lg:mx-56 mt-5'>
                <div className="flex justify-left text-2xl lg:text-5xl font-semibold lg:mb-5">
                    Education
                </div>
                <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <img className="h-8 lg:h-16 w-8 lg:w-16 flex-none m-auto" src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Iowa_State_Cyclones_logo.svg" alt="Deere & Co. Logo"/>
                            <div className="min-w-0 flex-auto m-auto">
                                <p className="text-lg lg:text-2xl font-semibold">Iowa State University</p>
                            </div>
                        </div>
                        <div className="align-center">
                            <p className="text-sm lg:text-2xl text-right font-semibold">B.S. Software Engineering</p>
                            <p className="flex mt-1 text-xs lg:text-lg justify-end">Aug 2021 - Dec 2025</p>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Technical Skills */}
            <div className='mt-5 md:mx-40 lg:mx-56'>
                <div className='flex justify-left text-2xl lg:text-5xl font-semibold lg:mb-5'>
                    Technical Skills
                </div>
                <div className='flex flex-row'>
                    <ul role="list" className="divide-y divide-gray-100 mx-auto w-72">
                        <li className="flex flex-col justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Logo"/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">TypeScript</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo"/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">React</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='Redux Logo'/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">Redux</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul role="list" className="divide-y divide-gray-100 mx-auto w-72 flex flex-col align-center">
                        <li className="flex flex-col gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass Logo"/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">Sass</p>
                                </div>
                            </div>
                        </li>
          
                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt='Tailwind Logo'/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">Tailwind</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Logo"/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">Bootstrap</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul role="list" className="divide-y divide-gray-100 mx-auto w-72">
                        <li className="flex flex-col justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none bg-white rounded-full m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="NextJS Logo"/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">NextJS</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='MongoDB Logo'/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">MongoDB</p>
                                </div>
                            </div>
                        </li>

                        <li className="flex flex-col justify-between gap-x-6 py-5">
                            <div className="flex flex-row m-auto gap-x-2">
                                <img className="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS Logo"/>
                                <div className="min-w-0 flex-auto m-auto">
                                    <p className="text-xs lg:text-2xl font-semibold">NodeJS</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Experience;
