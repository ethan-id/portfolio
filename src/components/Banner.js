import classNames from "classnames";
import styles from "@/components/LandingPage.module.scss";
import Image from "next/image";
import me from "../../public/me.png";
import {useEffect, useState} from "react";

export const Banner = () => {
    const words = ['innovative', 'aesthetic', 'useful', 'powerful', 'helpful', 'creative', 'efficient', 'intuitive', 'dynamic', 'robust'];
    const [index, setIndex] = useState(0);

    const [fade, setFade] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prevIndex) => (prevIndex + 1) % words.length);
                setFade(true);
            }, 1000);
        }, 5000);

        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className='px-10 2xl:px-60'>
            <div className='flex flex-col gap-48 my-10 2xl:my-10 md:flex-row items-center'>
                <div className='flex flex-col leading-normal'>
                    <p className={classNames('text-6xl', 'lg:text-8xl', 'font-bold', styles.myText, styles.fadeDown1)}>
                        Hey, I'm Ethan!
                    </p>
                    <div className={classNames('text-4xl ml-10 md:ml-20 mt-5 lg:mt-10 lg:text-6xl font-normal', styles.fadeDown2)}>
                        I love building
                        <p className={classNames('text-purple-800', fade ? styles['fade-in'] : styles['fade-out'])}>
                            {words[index]}
                        </p>
                        software
                    </div>
                </div>
                <div className={classNames(styles.fade, 'flex flex-col justify-center items-center w-5/6')}>
                    <Image
                        src={me}
                        className='dark:block rounded-3xl w-5/6'
                        alt="Photo of Ethan Hancock"
                    />
                </div>
            </div>
        </div>
    );
}