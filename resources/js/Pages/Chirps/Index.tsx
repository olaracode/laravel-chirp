import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, usePage } from "@inertiajs/react";
import { PageProps, IChirp } from "@/types";
import { FormEventHandler } from "react";
import CoreLayout from "@/Layouts/CoreLayout";
import Chirp from "@/Components/Chirp";
import { toast } from "sonner";

interface Page extends PageProps {
    chirps: IChirp[];
    flash: {
        message: string | null;
        status: string | null;
    };
}

function handleToastResponse(message?: string | null, status?: string | null) {
    if (!message) return;
    if (!status) return toast(message, {});
    if (status === "success") return toast.success(message, {});
    if (status === "error") return toast.error(message, {});
}

const Index = ({ auth, chirps, flash }: Page) => {
    handleToastResponse(flash.message, flash.status);
    return (
        <CoreLayout>
            <Head title="Feed" />
            <Chirp.New />
            {chirps.map((chirp) => (
                <Chirp.Post key={chirp.id} {...chirp} />
            ))}
        </CoreLayout>
    );
};

export default Index;
