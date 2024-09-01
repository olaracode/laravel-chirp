import React, { useState, useCallback, useEffect } from "react";
import dayjs from "dayjs";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useForm, usePage } from "@inertiajs/react";
import relativeTime from "dayjs/plugin/relativeTime";
import Button, { btn } from "../Button";
import { PageProps } from "@/types";
dayjs.extend(relativeTime);
const Preview = ({
    name,
    owner = false,
    created_at,
    id,
}: {
    id: number;
    owner?: boolean;
    name: string;
    created_at: string;
}) => {
    const page = usePage<
        PageProps & {
            followers: { id: number }[];
            following: { id: number }[];
        }
    >().props;
    const [previewVisible, setPreviewVisible] = useState(false);
    const { post, delete: destroy } = useForm({
        user_id: id,
    });

    const handleMouseEnter = useCallback(() => {
        setPreviewVisible(true);
    }, []);

    const handleMouseLeave = useCallback((e: any) => {
        // Add a small delay before hiding the preview
        setTimeout(() => {
            setPreviewVisible(false);
        }, 100); // 300ms delay
    }, []);

    const handleFollow = () => {
        post(route("followers.store"));
    };

    const handleUnfollow = () => {
        destroy(route("followers.destroy", { follower: id }));
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex relative z-1 items-start gap-2"
        >
            <img
                src="https://via.placeholder.com/50"
                alt="preview"
                className="rounded-full w-10 h-10"
            />
            <div className="relative z-1">
                <div className="flex gap-1 items-center">
                    <p className="font-bold">@{name}</p>
                    <p className="text-xs text-gray-500">
                        - {dayjs(created_at).fromNow()}
                    </p>
                </div>
                <p className="text-xs">Description</p>
                <AnimatePresence>
                    {previewVisible && !owner && (
                        <motion.div
                            className="absolute z-10 bg-gray-100 top-[40px] w-[200px] px-3 py-2 rounded-lg border border-black"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href={route("chirps.index")}>{name}</Link>
                            <div className="mt-2">
                                {page.following.find((f) => f.id === id) ? (
                                    <Button onClick={handleUnfollow}>
                                        Unfollow
                                    </Button>
                                ) : (
                                    <Button onClick={handleFollow}>
                                        {page.followers.find((f) => f.id === id)
                                            ? "Follow Back"
                                            : "Follow"}
                                    </Button>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Preview;
