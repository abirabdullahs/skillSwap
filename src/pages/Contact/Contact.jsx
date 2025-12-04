import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);
        
        // Simulate form submission
        setTimeout(() => {
            toast.success('Message sent successfully! We will get back to you soon.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="py-12">
            {/* Header */}
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    Get In Touch
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Have questions? We'd love to hear from you. Send us a message!
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                        Contact Information
                    </h2>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                                <Mail className="text-white" size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Email
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                info@skillswap.com
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                support@skillswap.com
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                                <Phone className="text-white" size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Phone
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                +1 (555) 123-4567
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                Mon - Fri, 9:00 AM - 6:00 PM EST
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                        <div className="shrink-0">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-600">
                                <MapPin className="text-white" size={24} />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Address
                            </h3>
                            <p className="mt-1 text-gray-600 dark:text-gray-400">
                                123 Innovation Street<br />
                                Tech City, TC 12345<br />
                                United States
                            </p>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                            Business Hours
                        </h3>
                        <div className="space-y-2 text-gray-600 dark:text-gray-300">
                            <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                            <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                            <p><span className="font-medium">Sunday:</span> Closed</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Name <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Email <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Phone
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 (555) 123-4567"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Subject <span className="text-red-600">*</span>
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="How can we help?"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                Message <span className="text-red-600">*</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us more about your inquiry..."
                                rows="5"
                                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            <Send size={20} />
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                        We typically respond within 24 hours
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
