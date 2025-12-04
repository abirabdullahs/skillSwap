import React, { Suspense, useEffect } from "react";
import Hero from './Hero';
import { useLoaderData, Link } from 'react-router';
import SkillCard from './../../components/SkillCard';
import Loader from '../../components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Mail, Zap, Users, Award } from 'lucide-react';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-in-out'
        });
    }, []);

    const skills = useLoaderData();

    // Get featured skills (first 4)
    const featuredSkills = skills.slice(0, 4);
    
    // Get categories
    const categories = [...new Set(skills.map(skill => skill.category))];

    return (
        <div className="space-y-16">
            {/* Hero Section */}
            <Hero />

            {/* Featured/Top-Rated Skills Section */}
            <section className="py-12" data-aos="fade-up">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
                        🌟 Featured Skills
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-300 text-lg mb-8">
                        Discover our most popular and highly-rated skills
                    </p>
                </div>

                <Suspense fallback={<Loader />}>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {featuredSkills.map((skill, index) => (
                            <div key={skill.skillId} data-aos="zoom-in" data-aos-delay={index * 100}>
                                <SkillCard skill={skill} />
                            </div>
                        ))}
                    </div>
                </Suspense>

                <div className="text-center">
                    <Link
                        to="/all-items"
                        className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                    >
                        View All Skills
                    </Link>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-12 bg-gray-50 dark:bg-gray-800 rounded-lg px-8" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    📚 Explore Categories
                </h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {categories.map((category, index) => (
                        <Link
                            key={category}
                            to={`/all-items?category=${category}`}
                            className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-all group cursor-pointer text-center"
                            data-aos="fade-right"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-3xl mb-3">
                                {['🎸', '🗣️', '🧘', '💻', '📷', '👨‍🍳', '🎨', '⚙️'][index]}
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors">
                                {category}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                {skills.filter(s => s.category === category).length} skills
                            </p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    🚀 How It Works
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center p-6" data-aos="fade-right" data-aos-delay="100">
                        <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">1</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Browse Skills</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Explore hundreds of skills shared by our community members from various categories.
                        </p>
                    </div>

                    <div className="text-center p-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">2</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Book a Session</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Select a skill that interests you and book a session with an experienced instructor at your convenience.
                        </p>
                    </div>

                    <div className="text-center p-6" data-aos="fade-left" data-aos-delay="300">
                        <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-purple-600 dark:text-purple-300">3</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Learn & Grow</h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Connect with instructors, attend sessions, and expand your knowledge with hands-on learning.
                        </p>
                    </div>
                </div>
            </section>

            {/* Top Rated Providers Section */}
            <section className="py-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    ⭐ Top Rated Providers
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center" data-aos="fade-left" data-aos-delay="100">
                        <img src="https://jtgt-static.b-cdn.net/images/justinguitar-social.jpg" alt="Alex Martin" className="rounded-full w-20 h-20 mx-auto mb-4 object-cover" />
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Alex Martin</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">🎸 Music Instructor</p>
                        <div className="flex justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">4.9 rating with 250+ sessions</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center" data-aos="fade-up" data-aos-delay="200">
                        <img src="https://eduurban.com/wp-content/uploads/2022/09/Rev_Web_Banner_Edu_Urban_a_Spoken_English_Main_Banner.jpg" alt="Sarah Lee" className="rounded-full w-20 h-20 mx-auto mb-4 object-cover" />
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Sarah Lee</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">💻 Web Developer</p>
                        <div className="flex justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">4.8 rating with 180+ sessions</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow text-center" data-aos="fade-right" data-aos-delay="300">
                        <img src="https://as1.ftcdn.net/jpg/04/92/02/40/1000_F_492024046_1uDtrdqpWt3xos6F9m49J0XhZEcP3Lou.jpg" alt="Anika Sultana" className="rounded-full w-20 h-20 mx-auto mb-4 object-cover" />
                        <h4 className="font-bold text-gray-900 dark:text-white text-lg">Anika Sultana</h4>
                        <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">👨‍🍳 Cooking Expert</p>
                        <div className="flex justify-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">4.7 rating with 220+ sessions</p>
                    </div>
                </div>
            </section>

            {/* Why Choose SkillSwap Section */}
            <section className="py-12 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg px-8" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-center mb-12">
                    💡 Why Choose SkillSwap?
                </h2>
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Community</h3>
                        <p className="opacity-90">Connect with like-minded learners and skilled professionals</p>
                    </div>

                    <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Quality</h3>
                        <p className="opacity-90">All providers are verified and highly-rated professionals</p>
                    </div>

                    <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Flexible</h3>
                        <p className="opacity-90">Learn at your own pace with convenient scheduling options</p>
                    </div>

                    <div className="text-center" data-aos="fade-up" data-aos-delay="400">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Support</h3>
                        <p className="opacity-90">24/7 customer support to help you with any questions</p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-12" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    💬 What Our Users Say
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow" data-aos="fade-right" data-aos-delay="100">
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                        <p className="italic text-gray-700 dark:text-gray-300 mb-3">
                            "I learned guitar within 2 months! The best local platform for learning from real experts."
                        </p>
                        <p className="font-semibold text-purple-600 dark:text-purple-400">— Alex D.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay="200">
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                        <p className="italic text-gray-700 dark:text-gray-300 mb-3">
                            "Easy to find learners and share my yoga skills. The interface is intuitive and user-friendly!"
                        </p>
                        <p className="font-semibold text-purple-600 dark:text-purple-400">— Ravi P.</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow" data-aos="fade-left" data-aos-delay="300">
                        <div className="flex gap-1 mb-3">
                            {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-yellow-500">⭐</span>
                            ))}
                        </div>
                        <p className="italic text-gray-700 dark:text-gray-300 mb-3">
                            "A great initiative for community learning. Highly recommend to anyone wanting to expand their skills!"
                        </p>
                        <p className="font-semibold text-purple-600 dark:text-purple-400">— Sara H.</p>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="py-12 bg-linear-to-r from-purple-50 to-indigo-50 dark:from-purple-900 dark:to-indigo-900 rounded-lg" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
                    📊 Our Growing Community
                </h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div>
                        <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">2.5K+</div>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Active Users</p>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">800+</div>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Skills Shared</p>
                    </div>
                    <div>
                        <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">1.2K+</div>
                        <p className="text-lg text-gray-600 dark:text-gray-300">Successful Sessions</p>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-12 bg-gray-900 text-white rounded-lg px-8" data-aos="fade-up">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">
                        📧 Stay Updated
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                        Subscribe to our newsletter and get the latest skills and opportunities delivered to your inbox.
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        />
                        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
