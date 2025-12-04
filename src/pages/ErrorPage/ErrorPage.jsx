import React from 'react';
import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';
import { Home, AlertTriangle, Search } from 'lucide-react';

const ErrorPage = () => {
    const error = useRouteError();

    let errorCode = 500;
    let errorMessage = 'Something went wrong';
    let errorDescription = 'An unexpected error occurred. Please try again later.';

    if (isRouteErrorResponse(error)) {
        errorCode = error.status;
        errorMessage = error.statusText || 'Error Cannot Found';
        
        if (error.status === 404) {
            errorDescription = 'The page you are looking for could not be found.';
        } else if (error.status === 401) {
            errorDescription = 'You are not authorized to access this page.';
        } else if (error.status === 403) {
            errorDescription = 'Access to this resource is forbidden.';
        }
    } else if (error?.message) {
        errorDescription = error.message;
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-lg w-full">
                {/* Error Icon */}
                <div className="flex justify-center mb-8">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-200 dark:bg-red-900 rounded-full blur-xl opacity-30 animate-pulse"></div>
                        <div className="relative bg-red-100 dark:bg-red-900 rounded-full p-6">
                            <AlertTriangle className="w-16 h-16 text-red-600 dark:text-red-400" />
                        </div>
                    </div>
                </div>

                {/* Error Code */}
                <div className="text-center mb-4">
                    <h1 className="text-8xl font-bold text-gray-900 dark:text-white mb-2">
                        {errorCode}
                    </h1>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
                        {errorCode === 404 ? 'Page Not Found' : 'Oops! Something went wrong'}
                    </h2>
                </div>

                {/* Error Description */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                        {errorDescription}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                        {errorCode === 404 ? (
                            "Don't worry! We can help you get back on track."
                        ) : (
                            'Please try again or contact support if the problem persists.'
                        )}
                    </p>
                </div>

                {/* Helpful Suggestions */}
                {errorCode === 404 && (
                    <div className="bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-lg p-6 mb-8">
                        <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">What you can try:</h3>
                        <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                            <li className="flex items-start gap-2">
                                <Search size={16} className="mt-0.5 shrink-0" />
                                <span>Check the URL for typos</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Search size={16} className="mt-0.5 shrink-0" />
                                <span>Use the search feature to find what you need</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Search size={16} className="mt-0.5 shrink-0" />
                                <span>Browse our categories to explore</span>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        <Home size={20} />
                        Go Home
                    </Link>
                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                    >
                        Go Back
                    </button>
                </div>

                {/* Additional Help */}
                <div className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400">
                    <p>Still need help?</p>
                    <Link to="/contact" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                        Contact our support team
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
