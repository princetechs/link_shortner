import React from 'react'

function Banner() {
    return (
        //     < !--
        //         This component uses @tailwindcss/forms

        //   yarn add @tailwindcss/forms
        //   npm install @tailwindcss/forms

        //     plugins: [require('@tailwindcss/forms')]
        //     -->

        <section className="bg-gray-50 py-24">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                       Short your links
                    </h2>

                    <p className="hidden text-gray-500 sm:mt-4 sm:block">
                    Your shortened URLs can be used in publications, documents, advertisements, blogs, forums, instant messages, and other locations. 
                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <form action="#" className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">

                            <input
                                style={{outline: 'none'}}
                                type="text"
                                placeholder="Enter link here"
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-md transition focus:border-white focus:outline-none focus:ring-2  focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group mt-4 flex w-full items-center justify-center rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-100 hover:shadow-md focus:outline-none focus:ring active:bg-indigo-500 sm:mt-0 sm:w-auto"
                        >
                            <span className="text-sm font-medium"> Short </span>

                            <svg
                                className="ml-3 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>

    )
}

export default Banner