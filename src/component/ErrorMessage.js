import React from 'react';

const ErrorMessage = ({ errorMessage }) => {
    console.log('the error in ErrorMesage componment is:',errorMessage)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-red-100 to-red-200">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <div className="text-center">
          <svg
            className="h-16 w-16 text-red-600 mx-auto animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
            />
          </svg>
          <h2 className="text-2xl font-bold text-red-600 mt-4">Oops!</h2>
          <p className="mt-2 text-gray-700">{errorMessage}</p>
          <button
            className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
