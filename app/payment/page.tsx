'use client';
import { useState, ChangeEvent } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Email is still part of the state but not required
        phone: '',
        inquiryType: '',
        message: '',
        transactionCode: '',  // Field for transaction code
    });
    const [success, setSuccess] = useState(false);

    const contactMethods = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            contact: "nepta@bishalkhadka.info.np",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            contact: "+977 9815326085",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            contact: "Dharan, Nepal.",
        },
    ];

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                access_key: 'd273866b-706f-4eb9-892e-6a4549c82383',
                name: formData.name,
                email: formData.email || undefined, // Allow email to be optional
                phone: formData.phone,
                inquiryType: formData.inquiryType,
                message: formData.message,
                transactionCode: formData.transactionCode,
                subject: 'New Contact Form Submission',
                from_name: 'My Website',
            }),
        });

        if (response.ok) {
            setSuccess(true);
            setFormData({ name: '', email: '', phone: '', inquiryType: '', message: '', transactionCode: '' });
        } else {
            alert('Error sending message');
        }
    };

    return (
        <main className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3 mt-16">
                        <h3 className="text-indigo-600 font-semibold">Payment</h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl mt-9">Registration Process</p>
                        <p>Pay entry fee Rs 150 using this QR Code or via eSewa ID, and then fill out the form for registration.</p>
                        <div className="mt-6 flex justify-center">
                            <img src="https://thinknepta.sirv.com/WhatsApp%20Image%202024-10-29%20at%2014.37.29_e336f3b5.jpg" alt="Pay via QR Code" className="w-40 h-auto" />
                        </div>
                        <p className="mt-4 text-center">eSewa ID: <strong>9815326085</strong></p>
                        <p style={{ textAlign: 'justify' }}>
                            Remember the transaction code after the payment. There should be a transaction code generated after you make the payment. It is crucial for payment verification. The transaction code looks like the one shown in the figure below.
                        </p>
                        <div className="mt-6 flex justify-center">
                            <img src="https://thinknepta.sirv.com/WhatsApp%20Image%202024-10-29%20at%2015.19.25_7acaa04b.jpg" alt="Pay via QR Code" className="w-40 h-auto" />
                        </div>
                    </div>
                    <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="font-medium">Full name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Email (optional)</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="(+977)"
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Payement method</label>
                                <select
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    required
                                >
                                    <option value="">Select your payement method</option>
                                    <option value="Tribhuvan University">eSewa</option>
                                    <option value="Kathmandu University">Khalti</option>
                                    <option value="Pokhara University">Banks or other payment methods</option>
                                </select>
                            </div>
                            <div>
                                <label className="font-medium">Transaction Code</label>
                                <input
                                    type="text"
                                    name="transactionCode"
                                    value={formData.transactionCode}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">Remarks</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    rows={4}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-6 py-3 mt-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:bg-indigo-700 transition-colors"
                            >
                                Submit
                            </button>
                        </form>
                        {success && (
                            <div className="mt-4 text-green-600">Your registration request has been sent successfully. After the verification of registration our team will contact you in the number you have provided in form through whatsapp/call/Sms.</div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactForm;
