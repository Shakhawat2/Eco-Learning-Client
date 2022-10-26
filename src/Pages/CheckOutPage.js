import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import Swal from 'sweetalert2';

// import 'sweetalert2/src/sweetalert2.scss'

const CheckOutPage = () => {
    const { user } = useContext(AuthContext)
    const courseDetails = useLoaderData();
    const { description, fullAbbre } = courseDetails;

    const date = new Date();
    const yr = date.getFullYear();
    const mth = date.getMonth() + 1;
    const day = date.getDate();
    const hr = date.getHours();
    const minute = date.getMinutes()

    const handleCheckOut = () => {
        // Swal.fire({
        //     title: 'Error!',
        //     text: 'Do you want to continue',
        //     icon: 'error',
        //     confirmButtonText: 'Cool'
        // })
        Swal.fire(
            'Good job!',
            'CheckOut Successful!!',
            'success'
        )
    }

    return (
        <div className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-900">
                <div className="flex items-center justify-between">
                    <span className="text-sm dark:text-gray-400">{`${day}-${mth}-${yr}`}</span>
                    <a onClick={handleCheckOut} rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded dark:bg-violet-400 dark:text-gray-900">CheckOut</a>
                </div>
                <div className="mt-3">
                    <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">{fullAbbre}</a>
                    <p className="mt-2">{description}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <a rel="noopener noreferrer" href="#" className="hover:underline dark:text-violet-400">Read more</a>
                    <div>
                        <a rel="noopener noreferrer" href="#" className="flex items-center">
                            <img src={user?.photoURL ? user?.photoURL : "https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png"} alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full dark:bg-gray-500" />
                            <span className="hover:underline dark:text-gray-400">{user?.displayName ? user?.displayName : 'No name Found'}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;