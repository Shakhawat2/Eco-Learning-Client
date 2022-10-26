import React, { useContext } from 'react';
import { useState } from 'react';
import { AuthContext } from '../Contexts/UserContext';

const AllCourses = ({course}) => {
    const {id, name, img} = course;
    const {setCourse} = useContext(AuthContext);
    const handleCourse = (e) =>{
        setCourse(course);     
    }
    return (
        <li onClick={() => handleCourse()} className="cursor-pointer mx-4 lg:mx-0  dark:text-gray-50">
            <span rel="noopener noreferrer"  className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-800 ">
                <img src={img} alt="" className="w-5 h-5 fill-current dark:text-gray-400"/>
                <span className='whitespace-nowrap '>{name}</span>
            </span>
        </li>
    );
};

export default AllCourses;