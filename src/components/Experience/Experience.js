import React from 'react';

const Experience = () => {
    return (
        <div className='my-20 lg:mt-40 lg:mb-20'>
            <div className="text-3xl lg:text-7xl font-normal leading-tight">
                Want to hire me?<br/>
                <div className='ml-10 lg:ml-20 font-bold'>
                    Here's what I can offer
                </div>
            </div>
            <hr className='mt-4'/>

            <div className='lg:mx-60 mt-10'>
                <div className="flex justify-left text-2xl lg:text-5xl font-semibold mb-5">
                    Previous Experience
                </div>
                <ul role="list" class="divide-y divide-gray-100">
                    <li class="flex justify-between gap-x-6 py-5">
                        <div class="flex gap-x-4">
                            <img class="h-10 lg:h-12 w-10 lg:w-12 flex-none rounded-full bg-gray-50 m-auto" src="https://media.licdn.com/dms/image/D4E0BAQGHcvebsMflbA/company-logo_100_100/0/1684271619207?e=1695859200&v=beta&t=VhjlBcWQSzUC0CxmGoJ-eVnlkeXOy_iriCbl7NbBNBI" alt="Deere & Co. Logo"/>
                            <div class="min-w-0 flex-auto m-auto">
                                <p class="text-lg lg:text-2xl font-semibold">John Deere</p>
                            </div>
                        </div>
                        <div class="align-center">
                            <p class="text-md lg:text-2xl font-semibold">Part Time Student Software Engineer</p>
                            <p class="flex mt-1 text-sm lg:text-lg justify-end">May 2021 - Present</p>
                        </div>
                    </li>
                    <li class="flex justify-between gap-x-6 py-5">
                        <div class="flex gap-x-4">
                            <img class="h-10 lg:h-12 w-10 lg:w-12 flex-none rounded-full bg-gray-50 m-auto" src="https://media.licdn.com/dms/image/C560BAQF5eFV54Ah03Q/company-logo_100_100/0/1670603375387?e=1695859200&v=beta&t=2qiWzuJ5q6rgNeWTSxlKZVjJ7iNaZZ7Waaf0twd08JQ" alt="ProMax Logo"/>
                            <div class="min-w-0 align-center m-auto">
                                <p class="text-lg lg:text-2xl font-semibold">ProMax</p>
                            </div>
                        </div>
                        <div class="align-center">
                            <p class="text-md lg:text-2xl font-semibold">Software Engineering Intern</p>
                            <p class="flex mt-1 text-sm lg:text-lg justify-end">Jan 2020 - Apr 2020</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='mt-10 lg:mx-60'>
                <div className='flex justify-left text-2xl lg:text-5xl font-semibold mb-5'>
                    Technical Skills
                </div>
                <div className='flex flex-row'>
                    <ul role="list" class="divide-y divide-gray-100 mx-auto w-72">
                        <li class="flex flex-col justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript Logo"/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">TypeScript</p>
                                </div>
                            </div>
                        </li>
                        
                        <li class="flex flex-col justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Logo"/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">React</p>
                                </div>
                            </div>
                        </li>

                        <li class="flex justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt='Redux Logo'/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">Redux</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul role="list" class="divide-y divide-gray-100 mx-auto w-72 flex flex-col align-center">
                        <li class="flex flex-col gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" alt="Sass Logo"/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">Sass</p>
                                </div>
                            </div>
                        </li>

                        <li class="flex justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt=' Logo'/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">Tailwind</p>
                                </div>
                            </div>
                        </li>

                        <li class="flex flex-col justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap Logo"/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">Bootstrap</p>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <ul role="list" class="divide-y divide-gray-100 mx-auto w-72">
                        <li class="flex flex-col justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none bg-white rounded-full m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg" alt="NextJS Logo"/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">NextJS</p>
                                </div>
                            </div>
                        </li>

                        <li class="flex justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt='MongoDB Logo'/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">MongoDB</p>
                                </div>
                            </div>
                        </li>

                        <li class="flex flex-col justify-between gap-x-6 py-5">
                            <div class="flex flex-row m-auto gap-x-4">
                                <img class="h-8 lg:h-12 w-8 lg:w-12 flex-none mix-blend-screen m-auto" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS Logo"/>
                                <div class="min-w-0 flex-auto m-auto">
                                    <p class="text-sm lg:text-2xl font-semibold">NodeJS</p>
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
