import React, { useState } from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Star, Calendar, Users, MapPin, Clock, BookOpen, ArrowLeft } from 'lucide-react';

const SkillDetails = () => {
    const { id } = useParams();
    const dataPrimary = useLoaderData();
    const data = dataPrimary?.find(item => item.skillId.toString() === id);
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!dataPrimary || dataPrimary.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 text-xl mb-4">No skill found</p>
                <Link to="/all-items" className="text-purple-600 hover:text-purple-700 font-medium">
                    Back to all skills
                </Link>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="text-center py-12">
                <p className="text-red-500 text-xl mb-4">Skill not found</p>
                <Link to="/all-items" className="text-purple-600 hover:text-purple-700 font-medium">
                    Back to all skills
                </Link>
            </div>
        );
    }

    const handleBookSession = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        setTimeout(() => {
            toast.success("Session booked successfully! Check your email for confirmation.");
            e.target.reset();
            setIsSubmitting(false);
        }, 1000);
    };

    return (
        <div className="py-8">
            {/* Breadcrumb */}
            <Link to="/all-items" className="flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 font-medium">
                <ArrowLeft size={18} />
                Back to Skills
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2">
                    {/* Image */}
                    <div className="rounded-lg overflow-hidden shadow-lg mb-8">
                        <img
                            src={data.image}
                            alt={data.skillName}
                            className="w-full h-96 object-cover"
                        />
                    </div>

                    {/* Title and Basic Info */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
                        <div className="flex items-start justify-between mb-4">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                                {data.skillName}
                            </h1>
                            <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full font-semibold">
                                {data.category}
                            </span>
                        </div>

                        {/* Provider Info */}
                        <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
                            <img
                                src="https://i.postimg.cc/3JN5Kc5Q/default-avatar.png"
                                alt={data.providerName}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {data.providerName}
                                </p>
                                <p className="text-gray-600 dark:text-gray-400">
                                    {data.providerEmail}
                                </p>
                            </div>
                        </div>

                        {/* Rating and Stats */}
                        <div className="grid grid-cols-3 gap-4 py-6 border-b border-gray-200 dark:border-gray-700">
                            <div className="text-center">
                                <div className="flex items-center justify-center gap-1 mb-2">
                                    <Star size={20} className="text-yellow-500" fill="currentColor" />
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                        {data.rating}
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Rating</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                    ${data.price}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Per Session</p>
                            </div>
                            <div className="text-center">
                                <div className={`text-2xl font-bold mb-2 ${data.slotsAvailable > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    {data.slotsAvailable}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Slots</p>
                            </div>
                        </div>

                        {/* Full Description */}
                        <div className="mt-6">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                                About This Skill
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                {data.description}
                            </p>
                        </div>

                        {/* Key Features */}
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="flex items-center gap-3">
                                <Clock className="text-purple-600" size={24} />
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Duration</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">1 Hour</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Users className="text-purple-600" size={24} />
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Students</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">Individual</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <BookOpen className="text-purple-600" size={24} />
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Level</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">Beginner</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="text-purple-600" size={24} />
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Mode</p>
                                    <p className="font-semibold text-gray-900 dark:text-white">Online</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Booking Form Sidebar */}
                <div className="lg:col-span-1">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 sticky top-20">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Book a Session
                        </h3>

                        {data.slotsAvailable > 0 ? (
                            <form onSubmit={handleBookSession} className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your name"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        required
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="+1 (555) 123-4567"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>

                                {/* Preferred Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Preferred Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        required
                                    />
                                </div>

                                {/* Time */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                                        Preferred Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                        required
                                    />
                                </div>

                                {/* Price Summary */}
                                <div className="bg-purple-50 dark:bg-purple-900 p-4 rounded-lg">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-600 dark:text-gray-300">Price per session</span>
                                        <span className="font-semibold text-gray-900 dark:text-white">${data.price}</span>
                                    </div>
                                    <div className="border-t border-purple-200 dark:border-purple-700 pt-2">
                                        <div className="flex justify-between">
                                            <span className="font-semibold text-gray-900 dark:text-white">Total</span>
                                            <span className="font-bold text-lg text-purple-600 dark:text-purple-400">${data.price}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    <Calendar size={20} />
                                    {isSubmitting ? 'Booking...' : 'Book Now'}
                                </button>

                                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                                    You'll receive a confirmation email shortly
                                </p>
                            </form>
                        ) : (
                            <div className="text-center py-8">
                                <p className="text-red-600 dark:text-red-400 font-semibold mb-4">
                                    ❌ No Slots Available
                                </p>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">
                                    This skill has no available slots at the moment. Please check back later or browse other skills.
                                </p>
                                <Link
                                    to="/all-items"
                                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors inline-block"
                                >
                                    Browse Other Skills
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkillDetails;