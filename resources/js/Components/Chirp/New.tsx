import React, { FormEventHandler } from "react";
import { useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
const New = () => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("chirps.store"), { onSuccess: () => reset() });
    };
    return (
        <form onSubmit={submit} className="p-4 border-b border-gray-200">
            <textarea
                value={data.message}
                className="w-full p-2 rounded-lg border border-gray-300"
                placeholder="What's happening?"
                rows={3}
                onChange={(e) => setData("message", e.target.value)}
            ></textarea>
            <InputError message={errors.message} className="mt-2" />
            <button
                type="submit"
                disabled={processing}
                className="bg-blue-400 text-white rounded-full px-4 py-2 mt-2 hover:bg-blue-500"
            >
                Tweet
            </button>
        </form>
    );
};

export default New;
