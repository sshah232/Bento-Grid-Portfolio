import React, { useRef, useState } from "react";
import { FadeIn } from "./FadeIn";
import Container from "./Container";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);
    
    const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const USER_ID     = import.meta.env.VITE_EMAILJS_USER_ID;

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .sendForm(
                SERVICE_ID, 
                TEMPLATE_ID,
                form.current,
                USER_ID
            )
            .then(
                () => {
                    setSent(true);
                    setSending(false);
                    form.current.reset();

                    // Reset the sent message after 5 seconds
                    setTimeout(() => {
                        setSent(false);
                    }, 5000);
                },
                (error) => {
                    console.error(error.text);
                    setSending(false);
                }
            );
    };

    return (
        <Container id="contact">
            <FadeIn>
                <div className="w-full max-w-7xl mx-auto my-2">
                    <div className="relative bg-[#131315] rounded-3xl p-8 overflow-hidden">
                        {/* Background Accents - Similar to the bento grid cards */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                            <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-blue-500 blur-xl"></div>
                            <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-purple-500 blur-xl"></div>
                            <div className="absolute top-2/3 right-1/4 w-28 h-28 rounded-full bg-[#ff5e1a] blur-xl"></div>
                        </div>

                        {/* SVG Accent */}
                        <svg className="absolute -top-8 -right-8 w-48 h-48 opacity-5 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 100 100">
                            <path d="M0,50 Q50,0 100,50 T200,50" strokeWidth="1" />
                        </svg>

                        <div className="relative z-10">
                            <div className="flex flex-col items-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-2">Let's Connect</h2>
                                <h3 className="text-xl text-[#ff5e1a] mb-4">Get in touch</h3>
                                <p className="text-gray-300 text-center max-w-lg mb-6">
                                    Looking for a skilled software engineer with expertise in AI and cloud technologies? Let's chat about how we can collaborate on your next project.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Contact Form Column */}
                                <div className="md:col-span-2 bg-[#1f1f23] p-6 rounded-xl border border-gray-800">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                                            <span className="text-xs text-gray-400">contact_me</span>
                                        </div>
                                    </div>

                                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">Your Name</label>
                                            <input
                                                type="text"
                                                name="from_name"
                                                placeholder="ABCD"
                                                required
                                                className="w-full bg-[#131315] p-4 rounded-lg text-white outline-none border border-gray-800 focus:border-[#ff5e1a] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">Your Email</label>
                                            <input
                                                type="email"
                                                name="reply_to"
                                                placeholder="abcd@example.com"
                                                required
                                                className="w-full bg-[#131315] p-4 rounded-lg text-white outline-none border border-gray-800 focus:border-[#ff5e1a] transition-colors"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs text-gray-400 mb-1">Your Message</label>
                                            <textarea
                                                name="message"
                                                rows="5"
                                                placeholder="I'd like to discuss a project opportunity..."
                                                required
                                                className="w-full bg-[#131315] p-4 rounded-lg text-white outline-none border border-gray-800 focus:border-[#ff5e1a] transition-colors"
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={sending || sent}
                                            className={`w-full py-3 rounded-full text-white font-medium transition-all ${sent ? "bg-green-600" : sending ? "bg-gray-600" : "bg-[#ff5e1a] hover:bg-opacity-90"
                                                }`}
                                        >
                                            {sent ? (
                                                <span className="flex items-center justify-center">
                                                    Message Sent
                                                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </span>
                                            ) : sending ? (
                                                <span className="flex items-center justify-center">
                                                    Sending
                                                    <span className="ml-2 flex">
                                                        <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                                                        <span className="w-1 h-1 bg-white rounded-full mx-1 animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                                                        <span className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
                                                    </span>
                                                </span>
                                            ) : (
                                                "Send Message"
                                            )}
                                        </button>
                                    </form>
                                </div>

                                {/* Contact Info Column */}
                                <div className="md:col-span-1 space-y-4">
                                    {/* Email Info */}
                                    <div className="bg-[#1f1f23] p-4 rounded-xl border border-gray-800">
                                        <div className="w-10 h-10 rounded-full bg-[#ff5e1a] bg-opacity-20 flex items-center justify-center mb-3">
                                            <svg className="w-5 h-5 text-[#ff5e1a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-sm font-medium text-white mb-1">Email</h4>
                                        <a href="mailto:shubhamshah1551@gmail.com" className="text-gray-400 text-sm hover:text-[#ff5e1a] transition-colors">
                                            shubhamshah1551@gmail.com
                                        </a>
                                    </div>

                                    {/* Location Info */}
                                    <div className="bg-[#1f1f23] p-4 rounded-xl border border-gray-800">
                                        <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-20 flex items-center justify-center mb-3">
                                            <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-sm font-medium text-white mb-1">Location</h4>
                                        <p className="text-gray-400 text-sm">
                                            Phoenix, Arizona
                                        </p>
                                    </div>

                                    {/* Connect on Social */}
                                    <div className="bg-[#1f1f23] p-4 rounded-xl border border-gray-800">
                                        <div className="w-10 h-10 rounded-full bg-purple-500 bg-opacity-20 flex items-center justify-center mb-3">
                                            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                            </svg>
                                        </div>
                                        <h4 className="text-sm font-medium text-white mb-3">Connect on</h4>

                                        <div className="flex space-x-2">
                                            <a href="https://www.linkedin.com/in/shubhamshah15/" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                                </svg>
                                            </a>
                                            <a href="https://www.github.com/sshah232/" className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors">
                                                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    {/* Availability Status */}
                                    <div className="bg-[#1f1f23] p-4 rounded-xl border border-gray-800">
                                        <div className="flex items-center mb-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                                            <span className="text-sm font-medium text-white">
                                                Looking for new opportunities!
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400">
                                            Currently accepting new opportunities and collaborations
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Response Time Indicator */}
                            <div className="mt-6 flex justify-center">
                                <div className="bg-[#1f1f23] px-5 py-3 rounded-full border border-gray-800 flex items-center">
                                    <svg className="w-5 h-5 text-[#ff5e1a] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span className="text-sm text-gray-300">
                                        Average response time: <span className="text-white font-medium">24 hours</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </Container>
    );
}

export default Contact;
