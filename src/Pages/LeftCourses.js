import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/UserContext';
import AllCourses from './AllCourses';

const LeftCourses = ({allCourse}) => {
    const {user} = useContext(AuthContext)
    return (
        <div className=" h-40 lg:h-screen p-3  w-screen  lg:w-60 dark:bg-black dark:text-gray-100">
            <div className="flex items-center p-2 space-x-4">
                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                <div>
                    <h2 className="text-lg font-semibold">{user?.displayName}</h2>
                    <span className="flex items-center space-x-1">
                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">View profile</a>
                    </span>
                </div>
            </div>
            <div className="divide-y divide-gray-700">
                <ul className="flex lg:block items-center  overflow-auto lg:overflow-hidden  my-4 pt-2 pb-4 space-y-1 text-sm">
                    {
                        allCourse.map(course => <AllCourses course={course} key={course.id}></AllCourses>)
                    }      
                </ul>
            </div>
        </div>
    );
};

export default LeftCourses;