import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function OficialInscricao() {

  const [showText, setShowText] = useState(false);

  const handleButtonClick = () => {
    setShowText(true);
  }


  const handleModalSubmit = (event) => {
    event.preventDefault();
    setShowText(false);
  }

  



  return (
    <>
      <div className="mx-24 mt-16">
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="text-xl font-semibold leading-7 text-gray-900">Inscrição</p>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Esta informação será partilhada com a escola para que possamos oficializar a sua inscrição e lidar com as mensalidades, escolhendo a mais adequada a si.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                    Conta do site
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-[#5BB6AE] sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">catchaswell.com/</span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="mail sem @..."
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    Sobre
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">Escreve algumas frases sobre ti.</p>
                </div>

                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                    Foto
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                    {/* <button
                    type="button"
                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Escolher foto de perfil
                  </button> */}
                  </div>
                  {/* </div>

              <div className="col-span-full"> */}
                  <label htmlFor="cover-photo" className="block mt-2 text-sm font-normal leading-6 text-gray-900">
                    Escolher foto de perfil
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold border-[#5BB6AE] text-[#5BB6AE] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#5BB6AE] focus-within:ring-offset-2 hover:[#037971]"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Informação pessoal</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Usa o endereço mail da tua conta.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Nome
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                    Apelido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Endereço email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                {/* <div className="sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                  Country
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div> */}

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                    Morada
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                    Concelho
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                    Localidade
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="region"
                      id="region"
                      autoComplete="address-level1"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                    Código postal
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Notificações</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Receberá todas as notícias de grande importância e publicidade.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Por email</legend>
                  <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#5BB6AE] focus:ring-[#5BB6AE]"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                          Mensalidades
                        </label>
                        <p className="text-gray-500">Recebe uma notificação com a mensalidade a pagar pelo mês.</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#5BB6AE] focus:ring-[#5BB6AE]"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="candidates" className="font-medium text-gray-900">
                          Concursos
                        </label>
                        <p className="text-gray-500">Recebe notificação quando existem inscriçoes para concursos ou na aproximação do mesmo.</p>
                      </div>
                    </div>
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-[#5BB6AE] focus:ring-[#5BB6AE]"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label htmlFor="offers" className="font-medium text-gray-900">
                          Merchandising
                        </label>
                        <p className="text-gray-500">Recebe uma notificação com novidades de produtos.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Notificações por SMS</legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">São enviadas por mensagem para o seu telemóvel.</p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-[#5BB6AE] focus:ring-[#5BB6AE]"
                      />
                      <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">
                        Tudo
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-[#5BB6AE] focus:ring-[#5BB6AE]"
                      />
                      <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">
                        Igual às notificações do email
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-[#5BB6AE] focus:ring-[#5BB6AE]"
                      />
                      <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">
                        Sem notificações por SMS
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to="signup">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancelar
              </button>
            </Link>
            {/* <Link to="/home"> */}
            <button
              type="button"
              className="rounded-md bg-[#5BB6AE] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#037971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5BB6AE]-600" onClick={handleButtonClick}>
              Guardar
            </button>

            {/* </Link> */}

          </div>
          {showText && (
          <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="max-w-xl text-left absolute z-10 bg-gray-100 rounded-xl pt-20 pl-14 pr-24 pb-20 flex flex-col items-start ">
              <h4 className="text-center text-3xl font-bold mb-4 ml-6" >
                A sua inscrição foi registada
              </h4>
              <div className="flex items-center ml-5">
                <div className="ml-4">


                  <form onSubmit={handleModalSubmit}>
                    <Link to="/personalarea">
                      <button
                        class="absolute top-3 right-7  rounded mt-4  py-0 px-1 border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                      >
                        ×
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>

            <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
          </div>
        )}
        </form >
        {/* Popup/modal window */}
        {/* {showText && (
          <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="max-w-xl text-left absolute z-10 bg-gray-100 rounded-xl pt-20 pl-14 pr-24 pb-20 flex flex-col items-start ">
              <h4 className="text-center text-3xl font-bold mb-4 ml-6" >
                A sua inscrição foi registada
              </h4>
              <div className="flex items-center ml-5">
                <div className="ml-4">


                  <form onSubmit={handleModalSubmit}>
                    <Link to="/home">
                      <button
                        class="absolute top-3 right-7  rounded mt-4  py-0 px-1 border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                      >
                        ×
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>

            <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
          </div>
        )} */}

      </div>
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