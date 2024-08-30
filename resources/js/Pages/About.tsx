import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-blue-50 flex flex-col justify-center items-center p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 space-y-4">
                <h1 className="text-3xl font-bold text-gray-800">About</h1>

                <p className="text-gray-600">
                    This is a fullstack project created by{" "}
                    <a
                        className="text-md font-black text-blue-500"
                        href="https:github.com/olaracode"
                    >
                        Octavio Lara
                    </a>{" "}
                    using Laravel and React
                </p>

                <p className="text-gray-600">
                    <span className="font-black">
                        This project is not really twitter.
                    </span>{" "}
                    It is a simple study project created to learn the use of
                    Laravel and React.
                </p>

                <p className="text-gray-600">
                    The project is open source and you can find the code on{" "}
                    <a
                        className="text-md font-black text-blue-500"
                        href="https;//github.com/olaracode/laravel-chirp"
                    >
                        Github
                    </a>
                    .
                </p>
                <div className="space-y-4 flex flex-col">
                    <a
                        href="/"
                        className="w-full bg-blue-500 text-center text-white rounded-full px-4 py-2 font-bold hover:bg-blue-600 transition duration-200"
                    >
                        Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
