import React from 'react';
import Lottie from "lottie-react";
import reader from '../assets/reader.json'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="dark:bg-white dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl dark:text-purple-800">Computer <br />
                        Science Lesson
                    </h1>
                    <p className="mt-6 mb-8 text-black text-xl font-medium  sm:mb-12"><small>
                        Computer Science is the study of computers and computational systems.
                        <br className="hidden md:inline lg:hidden" />Unlike electrical and computer engineers, computer scientists deal mostly with software and software systems; this includes their theory, design, development, and application.
                    </small>
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" to="/courses" className="flex items-center justify-center px-8 py-3 text-lg font-semibold rounded  dark:bg-violet-400 dark:text-gray-900">
                            Go to Courses
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mt-1 ml-2">
                                <path strokeLinecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>

                        </Link>
                    </div>

                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Lottie animationData={reader} loop={true} className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />;
                </div>
            </div>
        </section>
    );
};

export default Home;