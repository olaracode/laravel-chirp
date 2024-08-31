import React from "react";
import { Bell, Home, Mail, User, Twitter } from "lucide-react";
import Logo from "../Logo";
import { btn } from "../Button";
import { Link } from "@inertiajs/react";
const Sidebar = () => {
    return (
        <div className="flex flex-col items-start p-4 h-screen">
            <Link href={route("chirps.index")}>
                <Logo className="w-8 h-8 text-blue-400 mb-4" />
            </Link>
            <Link className={"w-full " + btn} href={route("chirps.index")}>
                <Home className="w-6 h-6" />
                <span className="text-xl">Home</span>
            </Link>
            <Link className={"w-full " + btn} href={route("chirps.index")}>
                <Bell className="w-6 h-6" />
                <span className="text-xl">Notifications</span>
            </Link>
            <Link className={"w-full " + btn} href={route("chirps.index")}>
                <Mail className="w-6 h-6" />
                <span className="text-xl">Messages</span>
            </Link>
            <Link className={"w-full " + btn} href={route("profile.edit")}>
                <User className="w-6 h-6" />
                <span className="text-xl">Profile</span>
            </Link>
            <hr />
            {/* Create an black outlines button */}
            <Link
                className="flex items-center space-x-4 p-2 hover:bg-gray-200 rounded-full mt-auto w-full border-2 w-full justify-center border-gray-400 text-gray-500"
                href={route("logout")}
                method="post"
                as="button"
            >
                <span className="text-xl">Logout</span>
            </Link>
        </div>
    );
};

export default Sidebar;
