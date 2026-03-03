"use client";
import Map from "./map";
import { useTheme } from "../context/themeContext";

const Introduction: React.FC = () => {
    const { themeClasses } = useTheme();
    return (
        <>
            <div className="flex flex-col text-lg text-center justify-center items-center font-serif space-y-5 mt-15">
                <Map />
                <div className={`border-2 border-[#383838] font-['IBMPlexSans'] text-lg rounded-lg p-5 mb-20 mx-5 ${themeClasses.textHolder} ${themeClasses.skillText}`}>
                    Hello, I am a curious programmer and developer !
                </div>
                <div className={`${themeClasses.text} font-['IBMPlexSans'] text-justify max-w-[50ch] break-words px-5 md:px-10`}>
                    Hi everyone, I am Arhant, currently a student of Computer Science and Engineering at IIIT kota. I am passionate about learning new technologies
                    and experimenting with innovative programming techniques.
                    With my diverse interests and curiosity, I strive to hone my skills through learning, building and
                    by contributing to impactful projects. My main interest lies in backend technologies like Node.js and Python.

                    <p className="mt-4">
                        I have developed applications using frameworks and technologies like
                        Next.js, Node.js, Python and Go. My work spans from designing responsive front-end interfaces
                        to architecting complex backend systems and databases.
                    </p>
                    <p className="mt-4">
                        Apart from coding, my hobbies include reading and painting. When I&apos;m not coding, you&apos;ll find me exploring and reading about new technology, science
                        or sometimes sketching.
                    </p>
                </div>
            </div>

        </>
    );
}

export default Introduction;
