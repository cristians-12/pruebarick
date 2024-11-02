import React from 'react';

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex space-x-2">
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-300"></div>
            </div>
        </div>
    );
};

export default Loader;
