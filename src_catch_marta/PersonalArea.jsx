import React, { useState } from 'react';
//import { Card, CardHeader, CardBody } from "@material-tailwind/react";
//import pessoa from "../constants/pessoa.jpeg";
import { Link } from 'react-router-dom';
import  assets  from "./assets/assets";

const PersonalArea = () => {
  const [seguidores, setSeguidores] = useState(100);
  const [seguindo, setSeguindo] = useState(50);
  const [seguindoUsuario, setSeguindoUsuario] = useState(false);

  const handleSeguir = () => {
    if (!seguindoUsuario) {
      setSeguidores(seguidores + 1);
      setSeguindoUsuario(true);
    } else {
      setSeguidores(seguidores - 1);
      setSeguindoUsuario(false);
    }
  };




  return (
    <div className="container mx-auto  px-4 mt-20 flex ">
      <div className="w-1/3 p-16 ">
        <div className="relative w-56 h-56 mb-5 overflow-hidden rounded-lg ">
          <img className="absolute top-0 left-0 w-full h-full " src={assets.fotoUser} alt="User" />
        </div>
        <div className="row-span-1">
        <p className="text-2xl">Jessica Lopez</p>
        <p className="text-gray-800 font-bold text-xl">@ihatemyl1f3</p>
        <button
                type="button"
                className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSeguir}
              >
                {seguindoUsuario ? "Following" : "Follow"}
        </button>
        </div>

        

        <p className="text-gray-800"><span style={{fontWeight : 'bold'}}>Followers:</span> {seguidores}</p>
        <p className="text-gray-800"><span style={{fontWeight : 'bold'}}>Following:</span> {seguindo}</p>
        <p className="text-gray-800">I am 20 years old and I love reading Fantasy novels!</p>

        <div className="flex justify-between items-center mt-4 ">
          <div className="flex space-x-4">
            <Link to="https://www.instagram.com/SEU_INSTAGRAM" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
            <Link to="https://www.facebook.com/SEU_FACEBOOK" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-2xl"></i>
            </Link>
            <Link to="https://twitter.com/SEU_TWITTER" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl"></i>
            </Link>
          </div>


        </div>
      </div>
      {/* Linha vertical */}
      <div className="border-l-2 h-auto my-8 mx-8"></div>
      < div className="flex flex-col w-full md:h-1/2">
        {/* Coluna direita    */}
        {/* flex justify-center w-2/3 */}
        <div className="text-center ">
          <h2 className="text-4xl font-bold text-[#146C94] text-left font-bold mb-4  pl-16 p-8">Jessica's Favorite Books</h2>
        </div>
        <div>
        <div class="mt-8 mr-0 ms-16 ">
            <div class="flex flex-wrap -mx-2 ">
              <div class="w-full md:w-1/4 px-2 mb-8 ">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="scale-100" src="https://img.bertrand.pt/images/1984-george-orwell/NDV8MjQ1NzU3Njd8MjA2ODY4MDB8MTYxMDYzNjYzNDAwMA==/258x300" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">
                 
                  <div className="flex justify-between items-center px-8">
                    
                    <h5 className="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10 mx-auto">
                      1984
                    </h5>
                    
                      <span  className="inline-block text-2xl"role="img"  aria-label="heart">❤️</span>
                   
                  </div>
                   </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="scale-100" src="https://img.portoeditora.pt/images/os-maias-eca-de-queiros/NHwxNjE4MTEzMHwyMzUzMDg0MHwxNjYxMjk1NjAwMDAw/258x300" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">
                 
                  <div className="flex justify-between items-center px-8">
                    
                    <h5 className="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10 mx-auto">
                        Os Maias
                    </h5>
                   
                      <span  className="inline-block text-2xl"role="img"  aria-label="heart">❤️</span>
                  
                  </div>
                   </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class=" scale-100" src="https://img.portoeditora.pt/images/sexus-henry-miller/NzZ8MjEwNDE3ODZ8MjE3MDAzNTF8MTYzNjQxNjAwMDAwMA==/258x300" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">
                 
                  <div className="flex justify-between items-center px-8">
                    
                    <h5 className="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10 mx-auto">
                    Sexus
                    </h5>
                    
                      <span  className="inline-block text-2xl"role="img"  aria-label="heart">❤️</span>
                    
                  </div>
                   </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="scale-100  " src="https://img.wook.pt/images/o-principezinho-antoine-de-saint-exupery/MXw0Njk5M3w3NzA2MHwxMzgzNTc2NTk5MDAw/258x300"  />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">
                 
                  <div className="flex justify-between items-center px-8">
                    
                    <h5 className="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10 mx-auto">The Little Prince  </h5>
                    <button 
                      
                    >
                      <span  className="inline-block text-2xl"role="img"  aria-label="heart">❤️</span>
                    </button>
                  </div>
                   </div>

    
                </div>
              </div>
            </div>
          </div>
        </div>

       
        {/* Coluna user Bookshelf */}
          <h2 className="text-4xl font-bold text-[#146C94] text-left font-bold mb-2  pl-16 p-6">Jessica's Bookshelves</h2>
       
        <div class="mt-16 mr-0 ms-8 bg-[#e3fbe3]">
            <div class="flex flex-wrap -mx-2 bg-[#e3fbe3]">
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIv41JznZUSNGVHaHBzxj1NoaZwMsYQ3kEHg&usqp" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10">
                      My favorite books
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIv41JznZUSNGVHaHBzxj1NoaZwMsYQ3kEHg&usqp" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10">
                    Cozy short stories
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIv41JznZUSNGVHaHBzxj1NoaZwMsYQ3kEHg&usqp" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10">
                      Sad books i cried to
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIv41JznZUSNGVHaHBzxj1NoaZwMsYQ3kEHg&usqp" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 text-xl font-medium leading-center text-center text-neutral-100 dark:text-neutral-10">
                      Books you should read
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="text-center ">
              <h2 className="text-4xl font-bold text-[#146C94] text-left font-bold mb-4  pl-16 p-8">Jessica's Friends</h2>
            </div>
            <div className='flex flex-row justify-start mb-10'>
              <div className='flex flex-col justify-center ml-8'>
                <img className='rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5TOhiJDxKO3ENghbXH8DcZP7Irc7LwlcWw&usqp=CAU'></img>
                <h3 className='text-center'>@JoJoBiz</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOrLP2U3eSHhpVpfPVX85NoPnkR9eiyniXg&usqp=CAU'></img>
                <h3 className='text-center'>@lmaoommm</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU'></img>
                <h3 className='text-center'>@Googuuma</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5TOhiJDxKO3ENghbXH8DcZP7Irc7LwlcWw&usqp=CAU'></img>
                <h3 className='text-center'>@Atlasu</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfEr7mUmwkTqCvWp6VhKLE5UEGWEY_d4jsDQ&usqp=CAU'></img>
                <h3 className='text-center'>@Redditergoat</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgjHc6jBe3B9CA2wkJTd2VMqMz1QFQOxM3g&usqp=CAU'></img>
                <h3 className='text-center'>@MarioLopez</h3>
              </div>
                <p class="text-3xl font-bold text-[#146C94] hover:underline mt-9">+ View more</p>
            </div>
          </div>




      </div>
    


  );
}

export default PersonalArea;
