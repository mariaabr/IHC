import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './signup.css'

function Signup() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        fname: "",
        lname: "",
        phone: "",
        cargo: "",
      });
      
      const handleClick = (e) => {
        e.preventDefault();
        // const genderSelectElement = document.getElementById("genderSelect");
        // const selectedOption = genderSelectElement.options[genderSelectElement.selectedIndex];
        // const selectedValue = JSON.parse(selectedOption.getAttribute("data-value"));
        // Update the user state with the new information entered in the form
        setUser({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            phone: document.getElementById("phone").value,
            cargo: document.getElementById("cargo").value
            // gender: selectedValue.gender,
        });
      
        // Log the updated user object to the console
        localStorage.setItem("user", JSON.stringify(user));
        if((document.getElementById("cargo").value == "professor") || (document.getElementById("cargo").value == "Professor")){
            window.location.replace("http://localhost:5173/personalarea2");
        } else if((document.getElementById("cargo").value == "aluno") || (document.getElementById("cargo").value == "Aluno")){
            window.location.replace("http://localhost:5173/personalarea");
        } else {
            window.location.replace("http://localhost:5173/home");
        }
      };

      useEffect(() => {
        // Log the updated user object to the console whenever the state changes
        localStorage.setItem("user", JSON.stringify(user));
        const userFromStorage = JSON.parse(localStorage.getItem("user"));
        console.log(userFromStorage);
      }, [user]);

    return (
        <>
            <html className="h-screen background-surf">
                <body className="flex h-full items-center py-16">
                    <main className="w-full max-w-lg mx-auto p-6">
                        <div className="w-full mt-7 bg-white bg-opacity-75 border border-[#787474]-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-3 sm:p-5">
                                
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input type="email" name="floating_email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer" placeholder=" " required />
                                        <label htmlFor="floating_email" className="peer-focus:font-semibold absolute text-sm text-[#037971] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#037971]-600 peer-focus:dark:text-[#037971]-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Endereço Email</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            type="password"
                                            name="floating_password"
                                            id="password"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            htmlFor="floating_password"
                                            className="peer-focus:font-semibold absolute text-sm text-[#037971] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#037971]-600 peer-focus:dark:text-[#037971]-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            htmlFor="floating_repeat_password"
                                            className="peer-focus:font-semibold absolute text-sm text-[#037971] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#037971]-600 peer-focus:dark:text-[#037971]-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Confirmar password
                                        </label>
                                    </div>

                                    {/* <div className="grid md:grid-cols-2 md:gap-6"> */}
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="text"
                                                name="floating_first_name"
                                                id="fname"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="floating_first_name"
                                                className="peer-focus:font-semibold absolute text-sm text-[#037971] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#037971]-600 peer-focus:dark:text-[#037971]-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Nome
                                            </label>
                                        </div>
                                    {/* </ div> */}

                                    <div className="relative z-0 w-full mb-6 group">
                                        <input
                                            type="text"
                                            name="floating_last_name"
                                            id="lname"
                                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            htmlFor="floating_last_name"
                                            className="peer-focus:font-semibold absolute text-sm text-[#037971] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#037971]-600 peer-focus:dark:text-[#037971]-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Apelido
                                        </label>
                                    </div>
                                    <div className="grid md:grid-cols-2 md:gap-6">
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="tel"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                                name="floating_phone"
                                                id="phone"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="floating_phone"
                                                className="peer-focus:font-semibold absolute text-sm text-[#037971] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#037971]-600 peer-focus:dark:text-[#037971]-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Telemóvel (913-968-902)
                                            </label>
                                        </div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="text"
                                                name="floating_company"
                                                id="cargo"
                                                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor="floating_phone"
                                                className="peer-focus:font-semibold absolute text-sm text-[#037971] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#037971]-600 peer-focus:dark:text-[#037971]-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                            >
                                                Cargo (Professor ou Aluno)
                                            </label>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        {/* <Link to="/personalarea"> */}
                                            <button
                                                onClick={handleClick}
                                                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#037971] text-white hover:bg-[#5BB6AE] focus:outline-none focus:ring-2 focus:ring-[#5BB6AE] focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"> Sign Up
                                            </button>
                                        {/* </Link> */}
                                    </div>
                                
                            </div>
                        </div>
                    </main>
                </body>
            </html >
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
    );
};

export default Signup;