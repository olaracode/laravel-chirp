import React, { PropsWithChildren } from "react";

const Feed = ({ children }: PropsWithChildren) => {
    return (
        <div className="border-l border-r border-gray-200 h-screen overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
                <h1 className="text-xl font-bold">Home</h1>
            </div>
            {children}
        </div>
    );
};

export default Feed;
