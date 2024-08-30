import React from "react";
import { Bell, Home, Mail, User, Twitter } from "lucide-react";
import Logo from "../Logo";
import Button from "../Button";
import { Link } from "@inertiajs/react";
const Sidebar = () => {
    return (
        <div className="flex flex-col items-start p-4 h-screen">
            <a href={route("chirps.index")}>
                <Logo className="w-8 h-8 text-blue-400 mb-4" />
            </a>
            <Button className="w-full">
                <Home className="w-6 h-6" />
                <span className="text-xl">Home</span>
            </Button>
            <Button className="w-full">
                <Bell className="w-6 h-6" />
                <span className="text-xl">Notifications</span>
            </Button>
            <Button className="w-full">
                <Mail className="w-6 h-6" />
                <span className="text-xl">Messages</span>
            </Button>
            <Button className="w-full">
                <User className="w-6 h-6" />
                <span className="text-xl">Profile</span>
            </Button>
            <hr />
            {/* Create an black outlines button */}
            <Link
                className="mt-auto w-full"
                href={route("logout")}
                method="post"
                as="button"
            >
                <Button className="border-2 w-full bg-gray-100  justify-center border-gray-400 text-gray-500">
                    <span className="text-xl">Logout</span>
                </Button>
            </Link>
        </div>
    );
};

export default Sidebar;
