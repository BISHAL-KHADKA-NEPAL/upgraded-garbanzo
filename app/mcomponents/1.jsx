'use client';

import React, { useState, useEffect } from 'react';

const ErrorMessage = ({ onClose }) => { // Accept onClose prop
    return (
        <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-red-500 bg-red-50 md:max-w-2xl md:mx-auto md:px-8">
            <div className="flex justify-between py-3">
                <div className="flex">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="self-center ml-3">
                        <span className="text-red-600 font-semibold">Error</span>
                        <p className="text-red-600 mt-1">
                            Sorry, we couldn't find the information you searched for. Please provide feedback at <a href="./form" className="underline">/feedback</a> to help us include it. We'll update the information on our site soon.
                        </p>
                    </div>
                </div>
                <button className="self-start text-red-500" onClick={onClose}> {/* Call onClose when clicked */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const StudyHub = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [showError, setShowError] = useState(false); // State to control error message visibility

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/BISHAL-KHADKA-NEPAL/ae11a8403368cb37195fb5c1f9ec5490/raw/f0b51a15ccff875f9476a1bce645f9c000e0749f/gistfile1.txt');
                const data = await response.json();
                setJobs(data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        setHasSearched(true);
        const lowerCaseQuery = searchQuery.toLowerCase();
        const results = jobs.filter(job => 
            job.job_title.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredJobs(results);
        setShowError(results.length === 0); // Show error if no results
    };

    const handleCloseError = () => {
        setShowError(false); // Function to hide the error message
    };

    return (
        <section>
            <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
                <div className="space-y-8 max-w-90xl mx-auto text-center mt-16">
                    <h1 className="text-md text-indigo-600 font-semibold">
                        Welcome to Your Study Hub!
                    </h1>
                    <h2 className="text-3xl md:text-5xl text-gray-800 font-extrabold mx-auto">
                        Access AI, Notes, Results, and More{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
                            to Enhance Your Learning.
                        </span>
                    </h2>
                    <p className="max-w-2xl text-lg mx-auto text-gray-600">
                        Find all your study materials and resources in one place, designed to help you succeed.
                    </p>

                    {/* Search Bar */}
                    <div className="flex items-center justify-center gap-x-3 mt-6">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="py-2.5 px-4 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-600 w-full sm:w-auto"
                            />
                            <button
                                type="submit"
                                className="py-2.5 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none w-full sm:w-auto"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>

                {/* Search Results */}
                <div className="mt-8">
                    {hasSearched && filteredJobs.length > 0 ? (
                        filteredJobs.map((job, index) => (
                            <div key={index} className="border p-4 rounded-lg mb-4 shadow">
                                <img src={job.company_icon} alt={job.company_name} className="w-12 h-12 inline-block mr-3" />
                                <h3 className="text-xl font-semibold">{job.job_title}</h3>
                                <p>{job.job_description}</p>
                                <p className="text-gray-500">Company: {job.company_name}</p>
                                <p className="text-gray-500">Date: {job.date}</p>
                                <a href={job.path} className="text-indigo-600 underline">View Details</a>
                            </div>
                        ))
                    ) : (
                        hasSearched && showError && <ErrorMessage onClose={handleCloseError} /> // Show error message only if set to show
                    )}
                </div>

                {/* Image */}
                <div className="mt-12 flex justify-center">
                    <img
                        src="https://thinknepta.sirv.com/jpeg-optimizer_pexels-andy-barbour-6683578.jpg"
                        className="w-full md:w-3/4 shadow-lg rounded-lg border"
                        alt="Study Hub Preview"
                    />
                </div>
            </div>
        </section>
    );
};

export default StudyHub;
