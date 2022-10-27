import React from 'react';
import SpecificCourse from './SpecificCourse';

const ShowAllCourseInRightSide = ({allCourse}) => {
    return (
        <>
            {
                allCourse.map(course => <SpecificCourse course={course} key={course.id}></SpecificCourse>)
            }
        </>
    );
};

export default ShowAllCourseInRightSide;