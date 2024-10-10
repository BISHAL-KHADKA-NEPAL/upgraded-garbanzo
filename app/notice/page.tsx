const members = [
    {
        company_icon: <img src="https://svgshare.com/i/1BLp.svg" alt="TU Logo" className="w-10 h-8" />,
        company_name: "TU",
        job_title: "Full Stack Engineer",
        job_description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        job_type: "Full-time",
        location: "Remotely",
        path: "javascript:void(0)"
    },
     {
        company_icon: <svg className="w-8 h-8" viewBox="0 0 43 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_690_1894)">
                <path d="M14.1693 48C18.08 48 21.254 44.4159 21.254 39.9999V31.9999H14.1693C10.2586 31.9999 7.08459 35.5839 7.08459 39.9999C7.08459 44.4159 10.2586 48 14.1693 48Z" fill="#0ACF83" />
                <path d="M7.08459 23.9999C7.08459 19.5839 10.2586 15.9999 14.1693 15.9999H21.254V31.9998H14.1693C10.2586 32 7.08459 28.4159 7.08459 23.9999Z" fill="#A259FF" />
                <path d="M7.08459 8.00006C7.08459 3.58406 10.2586 0 14.1693 0H21.254V15.9999H14.1693C10.2586 15.9999 7.08459 12.4161 7.08459 8.00006Z" fill="#F24E1E" />
                <path d="M21.2535 0H28.3382C32.2489 0 35.4229 3.58406 35.4229 8.00006C35.4229 12.4161 32.2489 15.9999 28.3382 15.9999H21.2535V0Z" fill="#FF7262" />
                <path d="M35.4229 23.9999C35.4229 28.4159 32.2489 32 28.3382 32C24.4275 32 21.2535 28.4159 21.2535 23.9999C21.2535 19.5839 24.4275 15.9999 28.3382 15.9999C32.2489 15.9999 35.4229 19.5839 35.4229 23.9999Z" fill="#1ABCFE" />
            </g>
            <defs>
                <clipPath id="clip0_690_1894">
                    <rect width="42.5075" height="48" fill="white" />
                </clipPath>
            </defs>
        </svg>,
        company_name: "Figma",
        job_title: "UI/UX Designer",
        job_description: "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        job_type: "Full-time",
        location: "Mauritania",
        path: "javascript:void(0)",
    }
]

export default () => (
    <section className="py-28">
        <div className="max-w-screen-lg mx-auto px-4 md:px-8">
            <div className="max-w-md">
                <h1 className="text-gray-800 text-2xl font-extrabold sm:text-3xl mt-11">Open Positions</h1>
                <p className="text-gray-600 mt-2">We're currently looking talent software engineers, and designers to help us in our missions and to grow up.</p>
            </div>
            <ul className="mt-12 divide-y space-y-3">
                {
                    members.map((item, idx) => (
                        <li key={idx} className="px-4 py-5 duration-150 hover:border-white hover:rounded-xl hover:bg-gray-50">
                            <a href={item.path} className="space-y-3">
                                <div className="flex items-center gap-x-3">
                                    <div className="bg-white w-14 h-14 border rounded-full flex items-center justify-center">
                                        {item.company_icon}
                                    </div>
                                    <div>
                                        <span className="block text-sm text-indigo-600 font-medium">{item.company_name}</span>
                                        <h3 className="text-base text-gray-800 font-semibold mt-1">{item.job_title}</h3>
                                    </div>
                                </div>
                                <p className="text-gray-600 sm:text-sm">
                                    {item.job_description}
                                </p>
                                <div className="text-sm text-gray-600 flex items-center gap-6">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 6V5C6 3.34315 7.34315 2 9 2H11C12.6569 2 14 3.34315 14 5V6H16C17.1046 6 18 6.89543 18 8V11.5708C15.5096 12.4947 12.8149 12.9999 10 12.9999C7.18514 12.9999 4.49037 12.4947 2 11.5707V8C2 6.89543 2.89543 6 4 6H6ZM8 5C8 4.44772 8.44772 4 9 4H11C11.5523 4 12 4.44772 12 5V6H8V5ZM9 10C9 9.44772 9.44772 9 10 9H10.01C10.5623 9 11.01 9.44772 11.01 10C11.01 10.5523 10.5623 11 10.01 11H10C9.44772 11 9 10.5523 9 10Z" fill="#9CA3AF" />
                                            <path d="M2 13.6923V16C2 17.1046 2.89543 18 4 18H16C17.1046 18 18 17.1046 18 16V13.6923C15.4872 14.5404 12.7964 14.9999 10 14.9999C7.20363 14.9999 4.51279 14.5404 2 13.6923Z" fill="#9CA3AF" />
                                        </svg>
                                        {item.job_type}
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-gray-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.05025 4.05025C7.78392 1.31658 12.2161 1.31658 14.9497 4.05025C17.6834 6.78392 17.6834 11.2161 14.9497 13.9497L10 18.8995L5.05025 13.9497C2.31658 11.2161 2.31658 6.78392 5.05025 4.05025ZM10 11C11.1046 11 12 10.1046 12 9C12 7.89543 11.1046 7 10 7C8.89543 7 8 7.89543 8 9C8 10.1046 8.89543 11 10 11Z" fill="#9CA3AF" />
                                        </svg>

                                        {item.location}
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    </section>
)