import React from "react";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center 
                    bg-gray-100 dark:bg-gray-900 
                    text-gray-900 dark:text-gray-100"
    >
      <div
        className="text-center p-8 rounded-2xl shadow-lg 
                      bg-white dark:bg-gray-800"
      >
        <h1 className="text-6xl font-bold mb-4 text-red-500">404</h1>

        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Sorry, the page you are looking for does not exist.
        </p>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-2 rounded-lg 
                     bg-blue-600 text-white 
                     hover:bg-blue-700 
                     transition duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
