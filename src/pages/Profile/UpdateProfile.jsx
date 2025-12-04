import React, { useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { User, Mail, Phone, Building, Image, Save, ArrowLeft } from 'lucide-react';

const UpdateProfile = () => {
    const navigate = useNavigate();
    const { editUser, setEditUser } = useOutletContext();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!editUser?.displayName || !editUser?.email) {
            toast.error("Name and email are required");
            return;
        }

        setIsLoading(true);

        if (auth.currentUser) {
            updateProfile(auth.currentUser, {
                displayName: editUser.displayName || auth.currentUser.displayName,
                photoURL: editUser.photoURL || auth.currentUser.photoURL,
            })
                .then(() => {
                    setEditUser({ ...editUser });
                    toast.success("Profile updated successfully!");
                    navigate("/profile");
                })
                .catch((err) => {
                    toast.error(err.message || "Failed to update profile");
                    setIsLoading(false);
                });
        } else {
            setEditUser({ ...editUser });
            toast.success("Profile saved locally");
            navigate("/profile");
        }
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <button
                        onClick={() => navigate("/profile")}
                        className="flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium mb-6"
                    >
                        <ArrowLeft size={20} />
                        Back to Profile
                    </button>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Edit Profile
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Update your profile information
                    </p>
                </div>

                {/* Update Form Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Profile Image URL */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Profile Image URL
                            </label>
                            <div className="relative">
                                <Image className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="url"
                                    placeholder="https://example.com/photo.jpg"
                                    value={editUser?.photoURL || ""}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, photoURL: e.target.value })
                                    }
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                />
                            </div>
                        </div>

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Full Name <span className="text-red-600">*</span>
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    value={editUser?.displayName || ""}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, displayName: e.target.value })
                                    }
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email (Read-only) */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Email <span className="text-gray-500 text-xs">(Cannot be changed)</span>
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={editUser?.email || ""}
                                    disabled
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg bg-gray-100 cursor-not-allowed opacity-60"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Phone Number
                            </label>
                            <div className="relative">
                                <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="tel"
                                    placeholder="+880 (123) 456-789"
                                    value={editUser?.Number || ""}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, Number: e.target.value })
                                    }
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                />
                            </div>
                        </div>

                        {/* Institution */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                                Institution/Organization
                            </label>
                            <div className="relative">
                                <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    placeholder="Your university or organization"
                                    value={editUser?.Institue || ""}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, Institue: e.target.value })
                                    }
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                                />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                <Save size={20} />
                                {isLoading ? "Saving..." : "Save Changes"}
                            </button>
                            <button
                                type="button"
                                onClick={() => navigate("/profile")}
                                className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 rounded-lg transition-colors"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>

                {/* Info Box */}
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-300">
                        <span className="font-semibold">Note:</span> Some changes may take a few moments to appear across the platform.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;