import React from 'react'
import { useState } from 'react'
import logo from './logocatchaswell.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center">
                    <div>
                        <a className="flex-none text-xl font-medium text-[#5BB6AE] dark:text-white">catch.a.swell@gmail.com</a>
                        <p className="text-gray-900">Contacto telefónico: (+351) 233 011 236</p>
                    </div>
                    <div className="mt-3">
                        <p className="text-gray-500">Nós fazemos parte da família <Link to="/home" className="text-[#5BB6AE]">Catch a swell.</Link></p>
                        <p className="text-gray-500">Localização: Avenida dos Pescadores nº10, Praia da Cova Gala 3090-667 Figueira da Foz, Portugal</p>
                        <p className="text-gray-500">© CatchASwell. 2015. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer