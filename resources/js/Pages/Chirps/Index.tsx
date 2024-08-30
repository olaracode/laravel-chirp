import React from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head } from "@inertiajs/react";
import { PageProps, IChirp } from "@/types";
import { FormEventHandler } from "react";
// import Chirp from "@/Components/Chirpr";
import CoreLayout from "@/Layouts/CoreLayout";
import Chirp from "@/Components/Chirp";

const Index = ({ auth, chirps }: PageProps & { chirps: IChirp[] }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        message: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("chirps.store"), { onSuccess: () => reset() });
    };
    return (
        <CoreLayout>
            <Head title="Feed" />
            <Chirp.Feed>
                <Chirp.New />
                {chirps.map((chirp) => (
                    <Chirp.Post key={chirp.id} {...chirp} />
                ))}
            </Chirp.Feed>
        </CoreLayout>
    );
};

export default Index;
