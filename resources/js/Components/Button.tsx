import React, { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
export const btn =
    "flex items-center space-x-4 py-2 px-4 hover:bg-gray-200 rounded-full";
const BaseButton = ({
    children,
    className = "",
    ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
    const cBtn = twMerge(btn, className);
    return (
        <button className={cBtn} {...props}>
            {children}
        </button>
    );
};

export default BaseButton;
