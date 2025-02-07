import {Resume} from '@/components/Resume';
import {Projects} from '@/components/Projects';
import {GitHub} from '@/components/GitHub';
import {Banner} from '@/components/Banner';

export const LandingPage = () => {
    return (
        <div className='flex flex-col'>
            <Banner />
            <Projects />
            <GitHub />
            <Resume />
        </div>
    );
};
