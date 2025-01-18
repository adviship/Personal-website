import React, { useState } from "react";

const Contact = () => {
    // State for form input
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!formData.name || !formData.email || !formData.message) {
            alert("All fields are required!");
        } else {
            alert("Your message has been sent successfully!");
            // You can replace the alert with your actual form submission logic (e.g., sending the form data to a server)
        }
    };

    return (
        <section id="contact" className="mt-20 p-8 bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4 max-w-md mx-auto">
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg text-black"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg text-black"
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full p-3 rounded-lg text-black"
                ></textarea>
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;
