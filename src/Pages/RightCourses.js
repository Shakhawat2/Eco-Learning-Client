import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';

const RightCourses = () => {
    const { course } = useContext(AuthContext);
    return (
        <>
            {course && course.id
                ?
                <div className=" sm:mx-2 card z-0 card-side bg-base-100 shadow-xl">
                    <figure><img src={course?.img} alt="Movie" className='w-48 h-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{course?.name}</h2>
                        <p></p>
                        <div className="card-actions justify-end">
                            <Link to={`/course/${course?.id}`}>
                            <button className="btn btn-primary">Get Premium Access</button>
                            </Link>
                        </div>
                    </div>
                </div>
                : <h1 className='mx-20  font-medium text-xl text-center text-sky-500'>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development. <br /> <span className='text-emerald-500 font-semibold text-2xl'>Please Select Any Course And Get Primium Access</span></h1>}
        </>

    );
};

export default RightCourses;