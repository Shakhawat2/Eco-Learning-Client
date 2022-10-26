import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftCourses from './LeftCourses';
import RightCourses from './RightCourses';

const Course = () => {
    const allCourse = useLoaderData();
    return (
        <div className='flex h-screen  w-screen flex-col lg:flex-row'>
            <div >
                <LeftCourses allCourse={allCourse}></LeftCourses>
            </div>
            <div className='m-auto '>
                <RightCourses></RightCourses>
            </div>
        </div>
    );
};

export default Course;