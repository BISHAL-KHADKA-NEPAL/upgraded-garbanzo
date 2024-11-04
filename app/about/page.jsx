export default () => {
    return (
        <section 
            className="py-28 flex items-center" 
            style={{ 
                background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.17) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)", 
                minHeight: "100vh"
            }}
        >
            <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
                <div className="max-w-xl space-y-3 md:mx-auto">
                    <h3 className="text-indigo-600 font-semibold">
                        About Us
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Your Trusted Student Resource Hub
                    </p>
                    <p className="text-gray-600">
                        Welcome to Bishal Khadka’s Student Resource Hub! Our mission is to provide students with easy access to quality notes, study materials, results, and academic schedules.
                        We aim to make learning simpler and more effective so you can focus on achieving your goals.
                    </p>
                </div>
                <div className="mt-4">
                    <a href="/form" className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    )
}
