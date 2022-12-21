import React from 'react';

const Team = () => {
    return (
        <div>
            <section class="flex items-center bg-gray-200 xl:h-[600px] font-poppins mb-24 rounded-md">
                <div class="justify-center flex-1 max-w-6xl px-4 py-6 mx-auto lg:py-4 md:px-6">
                    <div class="mb-10 text-center">
                        <span
                            class="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-activeColor uppercase">
                            Team
                        </span>
                        <h1 class="text-3xl font-bold capitalize"> Meet Our Wonderful Team </h1>
                    </div>
                    <div class="flex flex-wrap justify-center ">
                        <div class="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                            <div class="relative">
                                <div class="w-full h-60 lg:h-80">
                                    <img src="https://i.postimg.cc/bNyr5cJq/pexels-anastasia-shuraeva-5704720.jpg" alt=""
                                        class="object-cover w-full h-full lg:rounded-2xl" />
                                </div>
                                <div
                                    class="absolute w-full p-6 text-center bg-blue-900 lg:rounded-tl-full lg:right-0 lg:-mt-16 lg:w-72">
                                    <h2 class="mb-1 text-xl font-bold text-gray-200 ">Riyana henry</h2>
                                    <p class="text-sm text-gray-300">Designer</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                            <div class="relative">
                                <div class="w-full h-60 lg:h-80">
                                    <img src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg" alt=""
                                        class="object-cover w-full h-full lg:rounded-2xl" />
                                </div>
                                <div
                                    class="absolute w-full p-6 text-center bg-blue-900 lg:rounded-tl-full lg:right-0 lg:-mt-16 lg:w-72">
                                    <h2 class="mb-1 text-xl font-bold text-gray-200 ">Robert Robinson</h2>
                                    <p class="text-sm text-gray-300">Manager</p>
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 mb-32 lg:w-1/3 md:w-1/2 lg:mb-0">
                            <div class="relative">
                                <div class="w-full h-60 lg:h-80">
                                    <img src="https://i.postimg.cc/JzmrHQmk/pexels-pixabay-220453.jpg" alt=""
                                        class="object-cover w-full h-full lg:rounded-2xl" />
                                </div>
                                <div
                                    class="absolute w-full p-6 text-center bg-blue-900 lg:rounded-tl-full lg:right-0 lg:-mt-16 lg:w-72">
                                    <h2 class="mb-1 text-xl font-bold text-gray-200 ">Himron shet</h2>
                                    <p class="text-sm text-gray-300">Supervisor </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;