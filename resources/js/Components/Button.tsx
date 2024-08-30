import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";

const BaseButton = ({
    children,
    className = "",
    ...props
}: PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button
            className={
                "flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full" +
                ` ${className}`
            }
            {...props}
        >
            {children}
        </button>
    );
};

export default BaseButton;
