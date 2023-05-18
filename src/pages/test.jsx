import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { Dropdown } from 'flowbite-react';

function Test() {
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base text-7xl font-semibold text-[#5BB6AE]">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-700 sm:text-3xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Esta página encontra-se em desenvolvimento!</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link to="/home"
                            className="rounded-md bg-[#5BB6AE] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#037971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#037971]">
                            Página Inicial
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Test