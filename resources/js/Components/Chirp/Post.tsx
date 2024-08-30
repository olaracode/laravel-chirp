import React from "react";
import { IChirp } from "@/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const Chirp = ({ user, message, updated_at, created_at }: IChirp) => {
    return (
        <div className="p-4 border-b border-gray-200">
            <div className="flex space-x-2 justify-between">
                <div className="flex items-center gap-1">
                    <p className="font-bold">{user.name}</p>
                    {updated_at && (
                        <span className="text-gray-400 text-xs font-light">
                            (edited)
                        </span>
                    )}
                </div>
                <div className="text-gray-500">
                    <span className="text-sm font-bold">
                        {dayjs(created_at).fromNow()}
                    </span>
                </div>
            </div>
            <p className="mt-1">{message}</p>
        </div>
    );
};

export default Chirp;
