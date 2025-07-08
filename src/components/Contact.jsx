import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const reqPayload = {
                ...formData,
                fromPage: "portfolio"
            };

            const response = await fetch("https://api.ioll.in/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reqPayload),
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            else {
                const result = await response.text();
                console.log("Message sent successfully:", result);

                alert("Message sent successfully!");
            }
            // Reset the form
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending message:", error);
            alert("Failed to send message. Please try again.");
        }
    };
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="scroll-mt-16 md:scroll-mt-24 px-4 sm:px-6 pt-8 pb-2 sm:pb-4 max-w-3xl mx-auto flex flex-col items-center gap-2 sm:gap-6"
        >
            <h3 className="text-3xl sm:text-5xl font-extrabold text-center text-neutral-900 dark:text-white">Connect With Me</h3>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-xl">
                Feel free to reach out for collaborations, project discussions, or just to say hi!
            </p>
                <div className="w-full bg-gray-100 dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-300 dark:border-gray-700">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-6">
                        <div className="flex flex-col text-left">
                            <label htmlFor="name" className="mb-1 font-medium text-sm sm:text-base">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="e.g. Naruto Uzumaki"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="p-3 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <label htmlFor="email" className="mb-1 font-medium text-sm sm:text-base">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="e.g. naruto@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="p-3 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <label htmlFor="message" className="mb-1 font-medium text-sm sm:text-base">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Let me know how I can help you!"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="p-3 rounded bg-white dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>
                        <motion.button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 mt-2 rounded mx-auto block"
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </div>
        </motion.section>
    );
}