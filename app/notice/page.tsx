'use client';
import React, { useEffect, useState } from 'react';
import './App.css'; // Import your CSS file containing the loader styles

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch('https://gist.githubusercontent.com/BISHAL-KHADKA-NEPAL/1e8e21a7099638e527babcdd7a0d01df/raw/7340cc06cdeb6ef00252739efadced9c94191908/gistfile1.txt');
            const data = await response.json();
            setJobs(data);
            setLoading(false); // Set loading to false once data is fetched
        };

        fetchJobs();
    }, []);

    if (loading) {
        return (
            <div className="loader-container"> {/* Centered loading container */}
                <div className="loader"></div> {/* Spinner */}
            </div>
        ); // Show spinner while loading
    }

    return (
        <section className="py-28">
            <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                <div className="max-w-md">
                    <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl mt-11">University Notices</h1>
                    <p className="text-gray-600 mt-2">Get notices before everyone.</p>
                </div>
                <ul className="mt-12 divide-y space-y-3">
                    {jobs.map((job, idx) => (
                        <li key={idx} className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                            <a href={job.path} className="space-y-3">
                                <div className="flex items-center gap-x-3">
                                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                                        <img src={job.company_icon} alt={`${job.company_name} Logo`} className="w-10 h-8" />
                                    </div>
                                    <div>
                                        <span className="block text-sm text-indigo-600 font-medium">{job.company_name}</span>
                                        <h3 className="text-base text-gray-800 font-semibold mt-1">{job.job_title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 sm:text-sm">{job.job_description}</p>
                                <div className="text-sm text-gray-600 flex items-center gap-6">
                                    <span className="flex items-center gap-2">
                                        {job.job_type}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        {job.location}
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default JobList;
