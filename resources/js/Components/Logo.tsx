import React from "react";
import { clsx } from "clsx";
import { HTMLAttributes } from "react";

const Logo = ({
    className = "w-[100px] h-[100px]",
}: {
    className?: string;
}) => {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.28-.03-.56-.08-.83A7.72 7.72 0 0 0 23 3z" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M3 21l1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
        </svg>
    );
};

export default Logo;
