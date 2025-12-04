import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Newsletter Section */}
                <div className="py-8 border-b border-gray-700">
                    <div className="max-w-md mx-auto text-center">
                        <h3 className="text-xl font-bold text-white mb-3">Subscribe to Our Newsletter</h3>
                        <p className="mb-4 text-gray-300">Get updates about new skills and opportunities</p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
                            />
                            <button className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded font-medium transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo Section */}
                    <div className="md:col-span-1">
                        <Link to="/" className="text-2xl font-bold text-purple-500 hover:text-purple-400 transition-colors">
                            SkillSwap
                        </Link>
                        <p className="mt-4 text-sm text-gray-400">
                            Empowering communities by connecting people to share skills and knowledge.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-500 transition-colors"
                                title="Follow us on Facebook"
                            >
                                <Facebook size={24} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-purple-500 transition-colors"
                                title="Follow us on LinkedIn"
                            >
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/all-items" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    Browse Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/support" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <a href="#privacy" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-purple-500" />
                                <a href="mailto:info@skillswap.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    info@skillswap.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-purple-500" />
                                <a href="tel:+1234567890" className="text-gray-400 hover:text-purple-500 transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-purple-500 mt-1" />
                                <p className="text-gray-400">
                                    123 Innovation Street<br />
                                    Tech City, TC 12345
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="py-8 border-t border-gray-700 text-center">
                    <p className="text-gray-500">
                        © 2024 SkillSwap. All rights reserved. | Designed with ❤️ for skill sharing
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;