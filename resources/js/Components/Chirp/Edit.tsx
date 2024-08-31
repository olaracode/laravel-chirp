import React, { useState, FormEventHandler } from "react";
import Dropdown from "../Dropdown";
import Modal from "../Modal";
import { EllipsisVertical } from "lucide-react";
import { useForm } from "@inertiajs/react";
import InputError from "../InputError";
import Button, { btn } from "../Button";
import { Link } from "@inertiajs/react";
const Edit = ({
    message,
    id,
    owner = false,
}: {
    owner: boolean;
    message: string;
    id: number;
}) => {
    const [editing, setEditing] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: message,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        patch(route("chirps.update", id), {
            onSuccess: () => setEditing(false),
        });
    };
    if (!owner) return;
    return (
        <>
            <Dropdown>
                <Dropdown.Trigger>
                    <button className="flex items-center">
                        <EllipsisVertical className="w-4" />
                    </button>
                </Dropdown.Trigger>
                <Dropdown.Content>
                    <button
                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>
                    <button
                        className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out"
                        onClick={() => setIsDeleting(true)}
                    >
                        Delete
                    </button>
                </Dropdown.Content>
            </Dropdown>
            <Modal
                show={isDeleting}
                onClose={() => setIsDeleting(false)}
                maxWidth="sm"
            >
                <div className="px-3 py-5">
                    <h2 className="text-lg font-semibold">Delete Chirp</h2>
                    <p className="mt-4">
                        Are you sure you want to delete this chirp?
                    </p>
                    <div className="space-x-2 flex items-center mt-2">
                        <Link
                            href={route("chirps.destroy", id)}
                            method="delete"
                            className={
                                btn + " bg-red-400 text-white hover:bg-red-500"
                            }
                        >
                            Delete
                        </Link>
                        <Button
                            type="button"
                            onClick={() => setIsDeleting(false)}
                        >
                            Cancel
                        </Button>
                    </div>
                </div>
            </Modal>
            <Modal
                show={editing}
                onClose={() => setEditing(false)}
                maxWidth="md"
            >
                <div className="px-3 py-5">
                    <h2 className="text-lg font-semibold">Edit Chirp</h2>
                    <form onSubmit={submit}>
                        <textarea
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        ></textarea>
                        <InputError message={errors.message} className="mt-2" />
                        <div className="space-x-2 flex items-center mt-2">
                            <Button className="bg-blue-400 text-white hover:bg-blue-500">
                                Save
                            </Button>
                            <Button
                                type="button"
                                onClick={() => {
                                    setEditing(false);
                                    reset();
                                    clearErrors();
                                }}
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default Edit;
