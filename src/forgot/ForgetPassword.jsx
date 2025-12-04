import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { useLocation, Link } from 'react-router-dom';
import { Mail, Send, ArrowLeft, Check } from 'lucide-react';

const ForgetPassword = () => {
    const location = useLocation();
    const { email: defaultEmail } = location.state || {};
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        if (!email) {
            toast.error("Please enter your email address!");
            return;
        }

        setIsLoading(true);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setIsSubmitted(true);
                toast.success("Password reset email sent! Check your inbox.");
            })
            .catch((err) => {
                toast.error(err.message || "Failed to send reset email");
                setIsLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                {/* Back Link */}
                <Link
                    to="/login"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium mb-8"
                >
                    <ArrowLeft size={20} />
                    Back to Login
                </Link>

                {!isSubmitted ? (
                    <>
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                Reset Password
                            </h1>
                            <p className="text-gray-600 dark:text-gray-300">
                                Enter your email address and we'll send you a link to reset your password
                            </p>
                        </div>

                        {/* Reset Form Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                            placeholder="you@example.com"
                                            defaultValue={defaultEmail || ""}
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                                >
                                    <Send size={20} />
                                    {isLoading ? "Sending..." : "Send Reset Link"}
                                </button>
                            </form>

                            {/* Info Box */}
                            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                                <p className="text-sm text-blue-800 dark:text-blue-300">
                                    <span className="font-semibold">Tip:</span> Check your spam folder if you don't see the email in a few minutes.
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    /* Success State */
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                        <div className="text-center">
                            {/* Success Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-green-200 dark:bg-green-900 rounded-full blur-xl opacity-30 animate-pulse"></div>
                                    <div className="relative bg-green-100 dark:bg-green-900 rounded-full p-6">
                                        <Check className="w-12 h-12 text-green-600 dark:text-green-400" />
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                Check Your Email
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                We've sent a password reset link to your email address. Click the link to reset your password.
                            </p>

                            {/* Next Steps */}
                            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6 text-left">
                                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                                    Next steps:
                                </h3>
                                <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-300 list-decimal list-inside">
                                    <li>Open your email inbox</li>
                                    <li>Find the email from SkillSwap</li>
                                    <li>Click the reset link</li>
                                    <li>Enter a new password</li>
                                </ol>
                            </div>

                            {/* Return Button */}
                            <Link
                                to="/login"
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition-colors inline-block"
                            >
                                Back to Login
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgetPassword;