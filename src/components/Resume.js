import React from 'react';
import {Education} from '@/components/Education'
import {Skills} from "@/components/Skills";
import {Experience} from "@/components/Experience";

export const Resume = () => {
    return (
        <div className={'md:mx-40 ld:mx-60 2xl:mx-80 lg:mt-40 lg:mb-20'}>
            <div className="text-2xl text-center lg:text-7xl font-normal leading-relaxed">
                Want to hire me?<br/>
                <div className='mt-2 lg:mt-5 font-bold'>
                    Here's what I can offer
                </div>
            </div>
            <hr className='mt-4'/>

            <Experience/>

            <Education/>

            <Skills/>
        </div>
    )
}
