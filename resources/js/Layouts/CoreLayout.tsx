import React, { PropsWithChildren } from "react";
import TwitterClone from "@/Components/Core";
import Core from "@/Components/Core";
import { Toaster } from "sonner";
const CoreLayout = ({
    title = "Home",
    children,
}: PropsWithChildren<{ title?: string }>) => {
    return (
        <>
            <div className="flex flex-col md:flex-row">
                <div className="w-1/4 hidden md:block">
                    <Core.Sidebar />
                </div>
                <div className="block md:hidden">
                    <Core.Nav />
                </div>
                <div className="flex-grow md:w-2/4">
                    <Core.Section title={title}>{children}</Core.Section>
                </div>
            </div>
        </>
    );
};

export default CoreLayout;
