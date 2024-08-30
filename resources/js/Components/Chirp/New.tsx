import React from "react";

const New = () => {
    return (
        <div className="p-4 border-b border-gray-200">
            <textarea
                className="w-full p-2 rounded-lg border border-gray-300"
                placeholder="What's happening?"
                rows={3}
            ></textarea>
            <button className="bg-blue-400 text-white rounded-full px-4 py-2 mt-2 hover:bg-blue-500">
                Tweet
            </button>
        </div>
    );
};

export default New;
