import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from './Button';
import prancha from './prancha.png';
import barbatanas from './pes.png';
import prancha_surf from './prancha_surf.png';
import fato from './pngwing.com.png';


const Material = () => {
  const [clickCount, setClickCount] = useState(0);
  const [open, setOpen] = useState(false);

  function handleClick() {
    console.log('Button clicked');
  }

  return (
    
    <main className="h-screen px-40">
      <div className="mt-9">
        <div>
          <div style={{ display: 'flex', gridTemplateColumns: '1fr', gridTemplateRows: '1fr 1fr', height: '21vh', width: '80vw', gap: '0.5rem', marginTop: '0px', marginLeft: '0vw' }}>
            <div style={{ height: '10px', textAlign: 'left', marginBottom: '' }}>
              <p style={{ textAlign: 'center', marginTop: '120px', fontSize: '50px' }}>
                <b>Aluguer Material</b>
              </p>
            </div>
          </div>
          <div className="text-3xl">
            <h3>Quero alugar:</h3>
          </div>
          <div className="flex flex-row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '0px', width: '80vw', margin: '0 auto' }}>
            <div style={{ flexBasis: '25%' }}>
              <div className="mt-10">
                <div className="p-2">
                  <div className="flex justify-between items-center px-8">
                    <div className="image">
                      <img className="w-30 h-30" src={fato} alt="fato bodyboard/surf" />
                      <div className="text-center">
                        <label>
                          <input type="checkbox" className="text-[#5BB6AE] focus:ring-[#5BB6AE]"/>
                          <span className="ml-2">Fato Bodyboard/Surf</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexBasis: '25%' }}>
              <div className="mt-10">
                <div className="p-2">
                  <div className="flex justify-between items-center px-8">
                    <div className="image">
                      <img className="w-30 h-30" src={prancha} alt="prancha" />
                      <div className="text-center">
                        <label>
                          <input type="checkbox" className="text-[#5BB6AE] focus:ring-[#5BB6AE]"/>
                          <span className="ml-2">Prancha Bodyboard</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexBasis: '25%' }}>
              <div className="mt-10">
                <div className="p-2">
                  <div className="flex justify-between items-center px-8">
                    <div className="image">
                      <img className="w-30 h-25" src={barbatanas} alt="barbatanas" />
                      <div className="text-center">
                        <label>
                          <input type="checkbox" className="text-[#5BB6AE] focus:ring-[#5BB6AE]"/>
                          <span className="ml-2">Barbatanas Bodyboard</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ flexBasis: '25%' }}>
              <div className="mt-10">
                <div className="p-2">
                  <div className="flex justify-between items-center px-8">
                    <div className="image">
                      <img style={{ width: 'auto', height: '310px' }}  src={prancha_surf} alt="pranchaSurf" />
                      <div className="text-center">
                        <label>
                          <input type="checkbox" className="text-[#5BB6AE] focus:ring-[#5BB6AE]"/>
                          <span className="ml-2">Prancha Surf</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: '50px',
              display: "flex",
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Link to="/tamanhocal">
              <MyButton label={"Continuar"} style={{ width: "200px" }} />
            </Link>
          </div>
        </div>
      </div>
      <footer className="mt-40 w-full max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="text-center">
          <div>
            <a className="flex-none text-xl font-medium text-[#5BB6AE] dark:text-white">
              catch.a.swell@gmail.com
            </a>
            <p className="text-gray-900">Contacto telefónico: (+351) 233 011 236</p>
          </div>
          <div className="mt-3">
            <p className="text-gray-500">
              Nós fazemos parte da família{" "}
              <a href="/home" className="text-[#5BB6AE]">
                Catch a swell.
              </a>
            </p>
            <p className="text-gray-500">
              Localização: Avenida dos Pescadores nº10, Praia da Cova Gala 3090-667 Figueira da Foz, Portugal
            </p>
            <p className="text-gray-500">© CatchASwell. 2015. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};


export default Material;
