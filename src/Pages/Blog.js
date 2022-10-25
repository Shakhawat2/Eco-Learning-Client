import React from 'react';

const Blog = () => {
    return (
        <section className="dark:bg-gray-600 dark:text-gray-100">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions About Server and React</h2>
                <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
                    <div>
                        <h3 className="font-semibold">what is cors?</h3>
                        <p className="mt-1 dark:text-gray-400">Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Why are you using firebase? What other options do you have to implement authentication?</h3>
                        <p className="mt-1 dark:text-gray-400">Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold"> How does the private route work?</h3>
                        <p className="mt-1 dark:text-gray-400">The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">What is Node? How does Node work?</h3>
                        <p className="mt-1 dark:text-gray-400">It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;