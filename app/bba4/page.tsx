'use client';
import React, { useEffect, useState } from 'react';
import './app.css'; // Import your CSS file containing the loader styles

interface Job {
    path: string;
    company_icon: string;
    company_name: string;
    job_title: string;
    job_description: string;
    job_type: string;
    date: string; // Updated to include date instead of location
}

const JobList = () => {
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null); // State for error message
    const [searchTerm, setSearchTerm] = useState<string>(''); // State for search term

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/BISHAL-KHADKA-NEPAL/ae11a8403368cb37195fb5c1f9ec5490/raw/f0b51a15ccff875f9476a1bce645f9c000e0749f/gistfile1.txt');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched Jobs:', data); // Check the fetched data

                // Sort jobs by date in descending order
                const sortedJobs = data.sort((a: Job, b: Job) => {
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                });
                setJobs(sortedJobs);
            } catch (error: any) {
                console.error('There has been a problem with your fetch operation:', error);
                setError('Failed to load jobs. Please try again later.'); // Set error message
            } finally {
                setLoading(false); // Set loading to false regardless of success or error
            }
        };

        fetchJobs();
    }, []);

    if (loading) {
        return (
            <div className="loader-container">
                <div className="loader"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-message">
                {error} {/* Display error message */}
            </div>
        );
    }

    // Filter jobs based on the search term
    const filteredJobs = jobs.filter(job =>
        job.job_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <section className="py-28">
            <div className="max-w-screen-lg mx-auto px-4 md:px-8">
                <div className="max-w-md">
                    <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl mt-11">TU BBA 4th Semester Notes</h1>
                </div>
                {/* Search Input */}
                <div className="mt-4">
                    <input
                        type="text"
                        placeholder="Search by subject..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="border rounded-md p-2 w-full"
                    />
                </div>
                <ul className="mt-12 divide-y space-y-3">
                    {filteredJobs.map((job, idx) => (
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
                                        {job.date} {/* Displaying the date */}
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
