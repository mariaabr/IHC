import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import './login.css'

function Login() {
    return (
        <>
            <html className="h-screen background-surf">
                <body className="flex h-full items-center py-16">
                    <main className="w-full max-w-md mx-auto p-6">
                        <div className="mt-7 bg-white bg-opacity-75 border border-[#787474]-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-4 sm:p-7">
                                <form>
                                    <div className="grid gap-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-m font-bold text-[#037971] mb-2 dark:text-white">Endereço Email</label>
                                            <div className="relative">
                                                <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-[#5BB6AE] focus:ring-[#5BB6AE] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="email-error" />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                        </div>

                                        <div>
                                            <div className="flex justify-between items-center">
                                                <label htmlFor="password" className="block text-m font-bold text-[#037971] mb-2 dark:text-white">Password</label>
                                                {/* <a className="text-sm text-[#787474] decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a> */}
                                            </div>
                                            <div className="relative">
                                                <input type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-[#5BB6AE] focus:ring-[#5BB6AE] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400" required aria-describedby="password-error" />
                                                <div className="hidden absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
                                                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                            <div className="text-right">
                                                <a className="text-sm text-[#787474] decoration-2 hover:underline font-medium" href="../examples/html/recover-account.html">Forgot password?</a>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div className="flex">
                                                <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" />
                                            </div>
                                            <div className="ml-3">
                                                <label htmlFor="remember-me" className="text-sm text-[#787474] font-medium dark:text-white">Remember me</label>
                                            </div>
                                        </div>
                                        <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#037971] text-white hover:bg-[#5BB6AE] focus:outline-none focus:ring-2 focus:ring-[#5BB6AE] focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </main>
                </body>
            </html>
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

export default Login