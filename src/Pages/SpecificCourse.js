import React from 'react';
import { Link } from 'react-router-dom';

const SpecificCourse = ({course}) => {
    return (
        <div className=" sm:mx-2 card z-0 card-side bg-base-100 shadow-xl">
                    <figure><img src={course?.img} alt="Movie" className='w-48 h-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{course?.name}</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <Link to={`/course/${course?.id}`}>
                            <button className="btn btn-primary">About {course?.name}</button>
                            </Link>
                        </div>
                    </div>
                </div>
    );
};

export default SpecificCourse;