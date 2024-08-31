import React, { useState } from "react";
import { IChirp } from "@/types";
import dayjs from "dayjs";
import Dropdown from "../Dropdown";
import relativeTime from "dayjs/plugin/relativeTime";
import { EllipsisVertical } from "lucide-react";
import Modal from "../Modal";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Edit from "./Edit";
dayjs.extend(relativeTime);
const Chirp = ({
    user,
    message,
    updated_at,
    created_at,
    id,
    user_id,
}: IChirp) => {
    const [editing, setEditing] = useState(false);
    const currentUser = usePage<PageProps>().props.auth.user;
    return (
        <>
            <div className="p-4 border-b border-gray-200">
                <div className="flex space-x-2 justify-between">
                    <div className="flex items-center gap-1">
                        <p className="font-bold">{user.name}</p>
                        {created_at != updated_at && (
                            <span className="text-gray-400 text-xs font-light">
                                (edited)
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="text-gray-500">
                            <span className="text-sm font-bold">
                                {dayjs(created_at).fromNow()}
                            </span>
                        </div>
                        <Edit
                            id={id}
                            message={message}
                            owner={currentUser.id === user_id}
                        />
                    </div>
                </div>
                <p className="mt-1">{message}</p>
            </div>
        </>
    );
};

export default Chirp;
