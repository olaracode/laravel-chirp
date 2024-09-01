import React, { useState } from "react";
import { IChirp } from "@/types";
import Preview from "./Preview";

import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Edit from "./Edit";

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
                    <Preview
                        owner={currentUser.id === user_id}
                        name={user.name}
                        created_at={created_at}
                        id={user_id}
                    />
                    <div className="flex items-center gap-1">
                        <Edit
                            id={id}
                            message={message}
                            owner={currentUser.id === user_id}
                        />
                    </div>
                </div>
                <p className="mt-3">{message}</p>
            </div>
        </>
    );
};

export default Chirp;
