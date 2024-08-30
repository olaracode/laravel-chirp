import { Head, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import Logo from "@/Components/Logo";
export default function Welcome({ auth }: PageProps) {
    if (auth.user) {
        router.visit("chirps");
    }
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center p-4">
                <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-4">
                    <div className="flex flex-col items-center justify-center">
                        <Logo />
                        <p className="text-4xl">Chirp</p>
                    </div>

                    <h1 className="text-3xl font-bold text-center text-gray-800">
                        Happening now
                    </h1>

                    <p className="text-center font-bold text-gray-600">
                        Not really twitter.
                    </p>

                    <div className="space-y-4 flex flex-col">
                        <a
                            href={route("register")}
                            className="w-full bg-blue-500 text-center text-white rounded-full px-4 py-2 font-bold hover:bg-blue-600 transition duration-200"
                        >
                            Sign up
                        </a>

                        <a
                            href={route("login")}
                            className="w-full text-center bg-white text-blue-500 border border-blue-500 rounded-full px-4 py-2 font-bold hover:bg-blue-50 transition duration-200"
                        >
                            Log in
                        </a>
                    </div>

                    <p className="text-xs text-center text-gray-500">
                        Fullstack Project created by{" "}
                        <a
                            className="text-md font-black text-blue-500"
                            href="https:github.com/olaracode"
                        >
                            Octavio Lara
                        </a>{" "}
                        using Laravel and React
                    </p>
                    <hr />
                    <a
                        href={route("about")}
                        className="text-xs text-center flex justify-center text-gray-500"
                    >
                        Learn more about the project
                    </a>
                </div>
            </div>
        </>
    );
}
