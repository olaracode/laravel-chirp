import React from "react";
import { Bell, Home, Mail, User, Twitter, MenuIcon } from "lucide-react";
import Dropdown from "../Dropdown";
import Logo from "../Logo";
const Nav = () => {
    return (
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Logo className="w-8 h-8 text-blue-400" />
            <Dropdown>
                <Dropdown.Trigger>
                    <button className="flex items-center space-x-2">
                        <span className="text-xl">
                            <MenuIcon />
                        </span>
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <Dropdown.Link href="/" className="flex items-center gap-1">
                        <Home className="w-3" />
                        Home
                    </Dropdown.Link>
                    <Dropdown.Link
                        href="/notifications"
                        className="flex items-center gap-1"
                    >
                        <Bell className="w-3" />
                        Notifications
                    </Dropdown.Link>
                    <Dropdown.Link
                        href="/messages"
                        className="flex items-center gap-1"
                    >
                        <Mail className="w-3" />
                        Messages
                    </Dropdown.Link>
                    <Dropdown.Link
                        href="/profile"
                        className="flex items-center gap-1"
                    >
                        <User className="w-3" />
                        Profile
                    </Dropdown.Link>
                </Dropdown.Content>
            </Dropdown>
        </div>
    );
};

export default Nav;
