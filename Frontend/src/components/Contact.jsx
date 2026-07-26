import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        description: '',
    });
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .send(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                {
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    description: formData.description,
                },
                'YOUR_PUBLIC_KEY'
            )
            .then(() => {
                toast('✔️ Message Sent!');
                setFormData({ name: '', email: '', subject: '', description: '' });
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                toast('❌ Something went wrong. Please try again.');
            })
            .finally(() => setSending(false));
    };

    return (
        <section className="flex items-center justify-center px-4 py-16" id="contact">
            <div className="relative w-full max-w-xl">
                <div className="pointer-events-none absolute -top-10 -left-10 h-32 w-auto rounded-full bg-purple-500/30 blur-3xl" />
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-transparent backdrop-blur-sm">
                    <div className="border-b border-white/10 p-5">
                        <h2 className="text-lg font-semibold text-white text-center">Let's Connect</h2>
                        <p className="mt-1 text-sm text-center text-gray-400">
                            Have a question or project in mind? Send me a message below.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-5">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-sm font-medium text-white">Name</label>
                            <input
                                id="name" name="name" type="text" required
                                value={formData.name} onChange={handleChange}
                                placeholder="Your name"
                                className="rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                            <input
                                id="email" name="email" type="email" required
                                value={formData.email} onChange={handleChange}
                                placeholder="name@example.com"
                                className="rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className="text-sm font-medium text-white">Subject</label>
                            <input
                                id="subject" name="subject" type="text" required
                                value={formData.subject} onChange={handleChange}
                                placeholder="What's this about?"
                                className="rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                            />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="description" className="text-sm font-medium text-white">Description</label>
                            <textarea
                                id="description" name="description" required rows={4}
                                value={formData.description} onChange={handleChange}
                                placeholder="Tell me more..."
                                className="resize-none rounded-lg border border-white/10 bg-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-white/30"
                            />
                        </div>

                        <div className="border-t border-white/10 p-5 -mx-5 -mb-5 mt-2">
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full rounded-full bg-gray-100 px-6 py-3 font-semibold text-gray-900 transition-transform duration-300 ease-in-out hover:scale-[1.02] hover:bg-white active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {sending ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;