import React from 'react';

export default () => {
    const contactMethods = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" fill="currentColor" className="w-6 h-6">
                    <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
            ),
            title: "Join our community",
            desc: "Connect with us for updates.",
            link: {
                name: "Join our Discord",
                href: "https://discord.gg/wStySWd9",
            },
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 5.04 4.36 9.24 9.74 9.93v-7.02H9.32v-2.91h2.42V10.3c0-2.42 1.43-3.75 3.62-3.75 1.05 0 2.16.18 2.16.18v2.38h-1.22c-1.2 0-1.57.74-1.57 1.5v1.78h2.67l-.43 2.91h-2.24v7.02C19.64 21.24 24 17.04 24 12c0-5.52-4.48-10-10-10z" />
                </svg>
            ),
            title: "Follow us on Facebook",
            desc: "Stay updated with our news.",
            link: {
                name: "Visit our Page",
                href: "https://www.facebook.com/profile.php?id=100086984447908",
            },
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
            title: "Follow us on Instagram",
            desc: "Check out our latest posts.",
            link: {
                name: "View our Profile",
                href: "https://www.instagram.com/og.bishal_/",
            },
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex pb-12"> {/* Added pb-12 for bottom padding */}
            <div className="max-w-md">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl mt-0">
                    Let's connect
                </h3>
                <p className="mt-3">
                    We're here to help with any questions. Looking forward to hearing from you.
                </p>
            </div>
            <div>
            <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx} className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                                    <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <a href={item.link.href} className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium">
                                        {item.link.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
