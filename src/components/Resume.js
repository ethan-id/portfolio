import React from "react";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";

export const Resume = () => {
    return (
        <div
            className={"px-20 md:px-40 lg:px-64 lg:pt-24 2xl:px-96"}
            id="resume"
        >
            <div className="text-xl text-center lg:text-5xl font-normal leading-relaxed">
                Want to hire me?
                <br />
                <div className="mt-2 lg:mt-5 font-bold">
                    Here's what I can offer
                </div>
            </div>
            <hr className="mt-4" />

            <Experience />

            <Education />

            <Skills />
        </div>
    );
};
