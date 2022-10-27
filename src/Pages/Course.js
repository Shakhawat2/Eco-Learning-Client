import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftCourses from './LeftCourses';
import RightCourses from './RightCourses';

const Course = () => {
    const allCourse = useLoaderData();
    return (
        <div className='flex h-auto  w-screen flex-col lg:flex-row'>
            <div >
                <LeftCourses allCourse={allCourse}></LeftCourses>
            </div>
            <div className='my-10 mx-10'>
                <RightCourses allCourse={allCourse}></RightCourses>
            </div>
        </div>
    );
};

export default Course;