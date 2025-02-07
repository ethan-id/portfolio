'use client';

import {TypewriterEffect} from './shared/TypeWriterEffect';

export const ProjectsTypewriter = () => (
    <TypewriterEffect
        words={[
            {
                text: 'Projects',
                className: 'text-5xl lg:text-6xl font-bold text-white text-center mb-12'
            }
        ]}
        cursorClassName={'hidden'}
    />
);
