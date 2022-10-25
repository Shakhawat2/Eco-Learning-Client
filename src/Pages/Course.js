import React from 'react';
import LeftCourses from './LeftCourses';
import RightCourses from './RightCourses';

const Course = () => {
    return (
        <div className='flex h-screen  w-screen flex-col lg:flex-row'>
            <div >
                <LeftCourses></LeftCourses>
            </div>
            <div className='m-auto '>
                <RightCourses></RightCourses>
            </div>
        </div>
    );
};

export default Course;