import React from 'react';

const Timeline = () => {
    return (
        <div>
            <section className="font-poppins items-center">
                <div className="mx-auto max-w-6xl justify-center px-4 py-4 md:px-6 lg:py-8">
                    <div className="mx-auto max-w-xl">
                        <div className="text-center">
                            <div className="relative flex flex-col items-center">
                                <h1 className="text-6xl font-bold leading-tight text-normalColor">Bengali Taste</h1>
                                <div className="mt-1 mb-10 flex w-64 overflow-hidden rounded">
                                    <div className="h-2 flex-1 bg-orange-200"></div>
                                    <div className="h-2 flex-1 bg-orange-400"></div>
                                    <div className="h-2 flex-1 bg-orange-600"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto w-full lg:max-w-3xl">
                        <div className="relative flex gap-4">
                            <div className="mr-4 flex w-10 flex-col items-center md:w-24">
                                <div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200">
                                        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-blue-300"></div>
                            </div>
                            <div>
                                <h2 className="mb-4 inline-block rounded-3xl bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-2 text-xs font-medium text-gray-100">Mission</h2>
                                <div className="relative mb-10 flex-1 rounded-3xl border-b-4 border-blue-200 bg-white shadow max-w-lg">
                                    <div className="relative z-20 p-6">
                                        <p className="mb-2 text-xl font-bold text-activeColor">Our Service</p>
                                        <p className="text-gray-700">We are always trying to serve healthy and hygienic food to our customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex gap-4">
                            <div className="mr-4 flex w-10 flex-col items-center md:w-24">
                                <div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200">
                                        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-blue-300"></div>
                            </div>
                            <div>
                                <h2 className="mb-4 inline-block rounded-3xl bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-2 text-xs font-medium text-gray-100">Vision</h2>
                                <div className="relative mb-10 flex-1 rounded-3xl border-b-4 border-blue-200 bg-white shadow max-w-lg">
                                    <div className="relative z-20 p-6">
                                        <p className="mb-2 text-xl font-bold text-activeColor">Customer Review</p>
                                        <p className="text-gray-700">We are always giving concern on our customer review and rating</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex gap-4">
                            <div className="mr-4 flex w-10 flex-col items-center md:w-24">
                                <div>
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-200">
                                        <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                                    </div>
                                </div>
                                <div className="h-full w-px bg-blue-300"></div>
                            </div>
                            <div>
                                <h2 className="mb-4 inline-block rounded-3xl bg-gradient-to-r from-blue-500 to-blue-900 px-4 py-2 text-xs font-medium text-gray-100">Goal</h2>
                                <div className="relative mb-10 flex-1 rounded-3xl border-b-4 border-blue-200 bg-white shadow max-w-lg">
                                    <div className="relative z-20 p-6">
                                        <p className="mb-2 text-xl font-bold text-activeColor">Quality Improvement</p>
                                        <p className="text-gray-700">Base on customer review, we are always trying to improve our food quality and taste</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Timeline;