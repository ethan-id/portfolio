import Image from "next/image";
import deere from "@/images/deere-logo.png";
import promax from "@/images/promax-logo.jpeg";
import corteva from "@/images/corteva.png";

export const Experience = () => {
    return (
        <div className={''}>
            <div className='mt-10'>
                <div className="flex justify-left text-2xl lg:text-5xl font-semibold lg:mb-5">
                    Experience
                </div>
            </div>
            <ul role="list" className="divide-y divide-gray-100">
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <Image
                            src={corteva}
                            className={"h-8 lg:h-16 w-8 lg:w-16 rounded-lg mix-blend-screen m-auto"}
                            alt="Corteva Agriscience Logo"
                        />
                        <div className="min-w-0 flex-auto m-auto">
                            <p className="text-lg lg:text-2xl font-semibold">Corteva Agriscience</p>
                        </div>
                    </div>
                    <div className="align-center">
                        <p className="text-sm lg:text-2xl text-right font-semibold">Incoming Software Engineer Intern</p>
                        <p className="flex mt-1 text-xs lg:text-lg justify-end">May 2025 - August 2025</p>
                    </div>
                </li>
                <li className="flex justify-between gap-x-6 py-5">
                    <div className="flex gap-x-4">
                        <Image
                            src={deere}
                            className={"h-8 lg:h-16 w-8 lg:w-16 rounded-lg mix-blend-screen m-auto"}
                            alt="John Deere Logo"
                        />
                        <div className="min-w-0 flex-auto m-auto">
                            <p className="text-lg lg:text-2xl font-semibold">John Deere</p>
                        </div>
                    </div>
                    <div className="align-center">
                        <p className="text-sm lg:text-2xl text-right font-semibold">Part Time Student</p>
                        <p className="text-sm lg:text-2xl text-right font-semibold">Software Engineer Apprentice</p>
                        <p className="flex mt-1 text-xs lg:text-lg justify-end">May 2021 - May 2025</p>
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
    )
}
