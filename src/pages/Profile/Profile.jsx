import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { Edit, Mail, Phone, Building } from 'lucide-react';

const Profile = () => {
    const { user } = useAuth();
    const { editUser } = useOutletContext();
    const navigate = useNavigate();

    if (!user) {
        navigate("/login");
        return null;
    }

    const handleUpdateClick = () => {
        navigate("/update-profile");
    };

    return (
        <div className="min-h-screen bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
            <div className="max-w-2xl mx-auto">
                {/* Profile Card */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    {/* Header Background */}
                    <div className="h-32 bg-gradient-to-r from-purple-600 to-indigo-600"></div>

                    {/* Profile Content */}
                    <div className="px-6 pb-8">
                        {/* Avatar */}
                        <div className="flex flex-col items-center -mt-20 mb-6">
                            <img
                                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                                src={editUser?.photoURL || "https://i.postimg.cc/3JN5Kc5Q/default-avatar.png"}
                                alt="Profile"
                            />
                        </div>

                        {/* User Info */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                                {editUser?.displayName || "User Name"}
                            </h2>
                            <p className="text-purple-600 dark:text-purple-400 font-medium">
                                SkillSwap Member
                            </p>
                        </div>

                        {/* Details Grid */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                        <Mail className="text-purple-600 dark:text-purple-400" size={20} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                                    <p className="text-gray-900 dark:text-white font-semibold break-all">
                                        {editUser?.email || "user@example.com"}
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                        <Phone className="text-purple-600 dark:text-purple-400" size={20} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                                    <p className="text-gray-900 dark:text-white font-semibold">
                                        {editUser?.Number || "+880 (123) 456-789"}
                                    </p>
                                </div>
                            </div>

                            {/* Institution */}
                            <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg md:col-span-2">
                                <div className="flex-shrink-0">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                                        <Building className="text-purple-600 dark:text-purple-400" size={20} />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-600 dark:text-gray-400">Institution/Organization</p>
                                    <p className="text-gray-900 dark:text-white font-semibold">
                                        {editUser?.Institue || "Your University/Organization"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Update Button */}
                        <button
                            onClick={handleUpdateClick}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                        >
                            <Edit size={20} />
                            Update Profile
                        </button>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 grid md:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">0</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Skills Teaching</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">0</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Skills Learning</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center">
                        <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">0</p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">Sessions Completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;