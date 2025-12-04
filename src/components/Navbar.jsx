import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { Menu, X, LogOut } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toggleName, setToggleName] = useState(false);
    const Navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success("Logout Successful");
                Navigate("/");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    const { user } = useAuth();

    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-bold text-lg"
                            : "hover:text-purple-600 transition-colors text-lg"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-items"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-bold text-lg"
                            : "hover:text-purple-600 transition-colors text-lg"
                    }
                >
                    All Items
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-bold text-lg"
                            : "hover:text-purple-600 transition-colors text-lg"
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/support"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-bold text-lg"
                            : "hover:text-purple-600 transition-colors text-lg"
                    }
                >
                    Support
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive
                            ? "text-purple-600 font-bold text-lg"
                            : "hover:text-purple-600 transition-colors text-lg"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link to="/" className="text-2xl font-bold text-white hover:text-purple-200 transition-colors">
                            SkillSwap
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        <ul className="flex space-x-10 items-center">
                            {links}
                        </ul>
                    </div>

                    {/* Auth Section */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="relative flex items-center gap-4">
                                <div
                                    className="flex items-center gap-2 cursor-pointer hover:bg-purple-700 px-3 py-2 rounded transition-colors"
                                    onMouseEnter={() => setToggleName(true)}
                                    onMouseLeave={() => setToggleName(false)}
                                >
                                    <img
                                        src={
                                            user.photoURL ||
                                            "https://i.postimg.cc/3JN5Kc5Q/default-avatar.png"
                                        }
                                        alt="profile"
                                        className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                    />
                                    <span className="text-sm font-medium truncate max-w-xs">
                                        {user.displayName || "User"}
                                    </span>
                                    {toggleName && (
                                        <div className="absolute top-12 right-0 bg-white text-black px-4 py-2 rounded shadow-lg whitespace-nowrap z-10">
                                            {user.displayName || user.email}
                                        </div>
                                    )}
                                </div>
                                <button
                                    onClick={handleLogout}
                                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center gap-2"
                                >
                                    <LogOut size={18} />
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className="flex gap-3">
                                <Link
                                    className="bg-white text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-md font-medium transition-colors"
                                    to="/login"
                                >
                                    Login
                                </Link>
                                <Link
                                    className="bg-purple-400 hover:bg-purple-300 text-white px-4 py-2 rounded-md font-medium transition-colors"
                                    to="/signup"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white hover:text-purple-200 transition-colors"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-purple-700 rounded-b-lg">
                        <ul className="flex flex-col space-y-1 py-3 px-4">
                            {links}
                            <li className="pt-3 border-t border-purple-500">
                                {user ? (
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-2">
                                            <img
                                                src={
                                                    user.photoURL ||
                                                    "https://i.postimg.cc/3JN5Kc5Q/default-avatar.png"
                                                }
                                                alt="profile"
                                                className="w-8 h-8 rounded-full border-2 border-white object-cover"
                                            />
                                            <div className="flex-1">
                                                <p className="text-sm font-medium truncate">
                                                    {user.displayName || user.email}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setIsMenuOpen(false);
                                            }}
                                            className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors flex items-center justify-center gap-2"
                                        >
                                            <LogOut size={18} />
                                            Logout
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <Link
                                            className="w-full bg-white text-purple-600 hover:bg-purple-100 px-4 py-2 rounded-md font-medium text-center transition-colors"
                                            to="/login"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Login
                                        </Link>
                                        <Link
                                            className="w-full bg-purple-400 hover:bg-purple-300 text-white px-4 py-2 rounded-md font-medium text-center transition-colors"
                                            to="/signup"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            Sign Up
                                        </Link>
                                    </div>
                                )}
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;