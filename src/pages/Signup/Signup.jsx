import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../../firebase/firebase.config';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Mail, Lock, User, Image } from 'lucide-react';

const Signup = () => {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (value) => {
        if (value.length < 6) {
            return "Password must be at least 6 characters long";
        }
        if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
        }
        if (!/[a-z]/.test(value)) {
            return "Password must contain at least one lowercase letter";
        }
        return "";
    };

    const handleBlur = () => {
        const err = validatePassword(password);
        setError(err);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const photoURL = e.target.photoURL.value || "https://i.postimg.cc/3JN5Kc5Q/default-avatar.png";

        if (!name || !email || !password) {
            toast.error("Please fill in all required fields");
            return;
        }

        if (error) {
            toast.error("Please fix the password issue first!");
            return;
        }

        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const loggedUser = result.user;

                updateProfile(loggedUser, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        toast.success("Registration successful! Redirecting to login...");
                        auth.signOut().then(() => {
                            navigate("/login", { replace: true });
                        });
                    })
                    .catch((err) => {
                        toast.error(err.message);
                        setIsLoading(false);
                    });
            })
            .catch((err) => {
                toast.error(err.message);
                setIsLoading(false);
            });
    };

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then(() => {
                toast.success("Sign up with Google successful!");
                navigate("/");
            })
            .catch((err) => {
                toast.error(err.message);
                setIsLoading(false);
            });
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                        Create Account
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300">
                        Join SkillSwap and start learning today
                    </p>
                </div>

                {/* Signup Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleRegister} className="space-y-5">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Full Name <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Email Address <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="you@example.com"
                                    required
                                />
                            </div>
                        </div>

                        {/* Photo URL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Photo URL
                            </label>
                            <div className="relative">
                                <Image className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="url"
                                    name="photoURL"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    placeholder="https://example.com/photo.jpg"
                                />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                Leave empty for default avatar
                            </p>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Password <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className={`w-full pl-10 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 dark:bg-gray-700 dark:text-white ${
                                        error
                                            ? 'border-red-500 focus:ring-red-600'
                                            : 'border-gray-300 dark:border-gray-600 focus:ring-purple-600'
                                    }`}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onBlur={handleBlur}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                                >
                                    {showPassword ? (
                                        <FaEyeSlash size={18} />
                                    ) : (
                                        <FaEye size={18} />
                                    )}
                                </button>
                            </div>
                            {error && (
                                <p className="text-red-600 dark:text-red-400 text-sm mt-2">
                                    {error}
                                </p>
                            )}
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                                Password must be 6+ characters with uppercase and lowercase letters
                            </p>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            disabled={isLoading || !!error}
                            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition-colors"
                        >
                            {isLoading ? "Creating account..." : "Create Account"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                Or sign up with
                            </span>
                        </div>
                    </div>

                    {/* Google Sign Up Button */}
                    <button
                        onClick={handleGoogleSignIn}
                        disabled={isLoading}
                        className="w-full flex items-center justify-center gap-3 bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
                    >
                        <FcGoogle size={22} />
                        <span>Sign up with Google</span>
                    </button>

                    {/* Login Link */}
                    <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-purple-600 dark:text-purple-400 font-semibold hover:underline transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>

                {/* Terms Info */}
                <div className="mt-6 text-center text-xs text-gray-600 dark:text-gray-400">
                    <p>
                        By signing up, you agree to our{" "}
                        <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-purple-600 dark:text-purple-400 hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
