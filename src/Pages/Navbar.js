import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="z-10 sticky top-0 left-0 right-0 px-4 py-5 mx-auto bg-white sm:max-w-xl md:max-w-full lg:max-w-screen md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >
                    <svg
                        className="w-8 text-deep-purple-accent-400 hidden"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                    >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                    </svg>
                    <img src="https://www.pngmart.com/files/11/Computer-Engineer-Transparent-PNG.png" alt="" className='h-10' />
                    <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Computer Hope
                    </span>
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <NavLink
                            to="/home"
                            aria-label="Home"
                            title="Home"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/courses"
                            aria-label="Courses"
                            title="Courses"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                        >
                            Courses
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faq"
                            aria-label="FAQ"
                            title="FAQ"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
                <ul className="flex items-center hidden space-x-4 lg:flex">
                    <li className='mt-2'><input type="checkbox" className="toggle" defaultChecked /></li>

                    <li className=''>
                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btn btn-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >
                            Log In
                        </Link>
                    </li>
                    <li>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" title='shohug' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <svg
                                                className="w-8 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Company
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                                to="/home"
                                                aria-label="Home"
                                                title="Home"
                                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/courses"
                                                aria-label="Courses"
                                                title="Courses"
                                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                                            >
                                                Courses
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/faq"
                                                aria-label="FAQ"
                                                title="FAQ"
                                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                                            >
                                                FAQ
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/blog"
                                                aria-label="Blog"
                                                title="Blog"
                                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-gray-700 transition-colors duration-200 text-blue-600 underline decoration-blue-500 decoration-solid decoration-4 underline-offset-4	" : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-600"}
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                        <li className='mt-2'><input type="checkbox" className="toggle" defaultChecked /></li>

                                        <li className=''>
                                            <Link
                                                to="/login"
                                                className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md btn btn-secondary hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Log In
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="dropdown dropdown-end">
                                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                                    <div className="w-10 rounded-full">
                                                        <img src="https://placeimg.com/80/80/people" title='shohug' />
                                                    </div>
                                                </label>
                                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                                    <li>
                                                        <a className="justify-between">
                                                            Profile
                                                            <span className="badge">New</span>
                                                        </a>
                                                    </li>
                                                    <li><a>Settings</a></li>
                                                    <li><a>Logout</a></li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;