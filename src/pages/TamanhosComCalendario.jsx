import { useState } from "react";
// import Popup from "./Popup.jsx";
import Bodyboard from "./Bodyboard.jpg";
import MyButton from "./Button";
// import "./App.css";

const Tamanho = () => {
  const [mostrarTexto, setShowText] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showTextModal, setshowTextModal] = useState(false);

  function openPopup() {
    setShowPopup(true);
  }

  function CustomSelect() {
    const [hoveredOption, setHoveredOption] = useState(null);
  
    const handleOptionMouseEnter = (value) => {
      setHoveredOption(value);
    };
  
    const handleOptionMouseLeave = () => {
      setHoveredOption(null);
    };
  
    const optionStyles = (value) => {
      if (value === hoveredOption) {
        return {
          backgroundColor: '#5BB6AE',
          color: 'white',
        };
      }
      return null;
    };
  
    return (
      <select
        style={{
          backgroundColor: 'white',
          color: 'grey',
          fontSize: '20px',
          border: '2px solid lightgray',
          borderRadius: '10px',
        }}
      >
        <option value="">Selecione a data</option>
        <option
          value="5"
          onMouseEnter={() => handleOptionMouseEnter('5')}
          onMouseLeave={handleOptionMouseLeave}
          style={optionStyles('5')}
        >
          5 de Junho (Segunda)
        </option>
        <option
          value="6"
          onMouseEnter={() => handleOptionMouseEnter('6')}
          onMouseLeave={handleOptionMouseLeave}
          style={optionStyles('6')}
        >
          6 de Junho (Terça)
        </option>
        {/* Add more options with similar structure */}
      </select>
    );
  }

  function handleClick2() {
    setShowText(true);
  }

  function OpenText2() {
    setShowText2(true);
  }

  const handleButtonClick = () => {
    setshowTextModal(true);
  };

  const OpenFinalModal = () => {
    setShowText3(true);
  };

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const newPageNumber = event.target.elements.pageNumber.value;
    setPageNumber(newPageNumber);
    setShowText(false);
  };

  const titleStyle = {
    display: "flex",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "1fr 1fr",
    height: "21vh", // mudar tamanho total da grelha
    width: "80vw",
    gap: "0.5rem",
    marginTop: "0px",
  };

  function handleClick() {
    setShowText(true);
    setShowButtons(false);
    setShowPopup(true);
  }

  return (
    <html className="h-screen px-40 ml-10">
      <body>
        <main className="mt-9">
          <div>
            {/* <Popup isOpen={showPopup} setIsOpen={setShowPopup} /> */}
            {/* <div classname="titleStyle">
              <div style={{ marginTop: "150px" }}>
                <b>Aluguer de Material</b>
              </div>
            </div> */}
            <div style={titleStyle}>
              <div
                style={{ height: "10px", textAlign: "left", marginBottom: "" }}
              >
                {/* <Link to="/home" className="text-black">
                  {" "}
                  Voltar{" "}
                </Link> */}
                {/* <Link to={'/home'}><button style={{ color: 'black', backgroundColor: 'white', padding: '0px', border: 'none' }}>
        {/* <Link to>
                <svg class="h-8 w-8 text-red-500" width="24" height="20" viewBox="0 0 24 15" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 6  9 12 15 18" />
                </svg>
                Voltar
            </linkto> 
        Voltar
    </button>
    </Link> */}
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "120px",
                    fontSize: "50px",
                  }}
                >
                  <b>Aluguer Material Surf</b>
                </p>
              </div>
            </div>

            <div
              className="container"
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "0px",
                marginTop: "0 px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    marginTop: "-80px",
                  }}
                >
                  <p style={{ fontSize: "30px", color: "#5BB6AE" }}>Peso</p>
                  <input
                    style={{
                      fontSize: "20px",
                      border: "2px solid lightgray",
                      borderRadius: "10px",
                      marginLeft: "10px",
                    }}
                    placeholder="Introduz o peso"
                  />

                  <div className="row">
                    <p
                      style={{ fontSize: "30px", color: "#5BB6AE", marginLeft: "100px", display: "inline" }}>
                      Tamanho Prancha:
                    </p>
                    <p
                      style={{ fontSize: "28px", marginBottom: "0", marginLeft: "7px", display: "inline" }}
                    >
                      {mostrarTexto ? "P" : ""}
                    </p>
                  </div>

                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <p style={{ fontSize: "30px", color: "#5BB6AE" }}>Altura</p>
                  <input
                    style={{
                      fontSize: "20px",
                      border: "2px solid lightgray",
                      borderRadius: "10px",
                      marginLeft: "10px",
                    }}
                    placeholder="Introduz a altura"
                  />
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "80px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "30px",
                        color: "#5BB6AE",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Tamanho Barbatana:
                    </p>
                    <p style={{ fontSize: "28px", marginLeft: "7px" }}>
                      {mostrarTexto ? "36" : ""}
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginBottom: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {/* <p style={{ fontSize: "30px", color: "#5BB6AE" }}>Tamanho Pé</p>
                  <select className="text-[#5BB6AE] focus:ring-[#5BB6AE]"
                    style={{
                      fontSize: "20px",
                      border: "2px solid lightgray",
                      borderRadius: "10px",
                      marginLeft: "10px",
                    }} */}
                  <p style={{ fontSize: "30px", color: "#5BB6AE" }}>
                    Tamanho Pé
                  </p>
                  <select 
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#037971] sm:text-sm sm:leading-6"
                    style={{
                      backgroundColor: "white",
                      color: "grey",
                      fontSize: "20px",
                      borderRadius: "10px",
                      border: "1px solid lightgray",
                      marginLeft: "10px",
                    }}
                  >
                    <option value="">Selecione o tamanho do pé</option>
                    <option value="30">30</option>
                    <option value="32">32</option>
                    <option value="34">34</option>
                    <option value="36">36</option>
                    <option value="38">38</option>
                    <option value="40">40</option>
                  </select>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginLeft: "40px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "30px",
                        color: "#5BB6AE",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Tamanho Fato:
                    </p>
                    <p style={{ fontSize: "28px", marginLeft: "7px" }}>
                      {mostrarTexto ? "S" : ""}
                    </p>
                  </div>
                </div>
              </div>

              <div className="container" style={{ marginLeft: "60px" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                ></div>
                <div></div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                ></div>
              </div>
              <img
                src={Bodyboard}
                alt="Image description"
                style={{ marginRight: "10px",  borderRadius: "5%"}}
              />
            </div>
            <div
              style={{
                marginLeft: "480px",
                marginTop: "-50px",
                display: "flex",
                gap: "40px",
              }}
            >
              <MyButton
                label={"Ver Tamanho"}
                onClick={handleClick2}
                style={{ width: "200px" }}
              />
              <MyButton
                label={"Efetuar Aluguer"}
                onClick={handleButtonClick}
              />
            </div>
          </div>

                {showTextModal && (
            <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="rounded-xl max-w-xl text-left absolute z-10 bg-gray-100 rounded-md pt-20 pl-14 pr-24 pb-20 flex flex-col items-center ">
                <h4 className="text-center font-bold text-3xl mb-4 ml-16">
                  Seleção de Datas
                </h4>
                <select
                  className="block ml-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                  style={{
                        backgroundColor: "white",
                        color: "grey",
                        fontSize: "20px",
                        borderRadius: "10px",
                        
                  }}>
                    <option value="">Selecione a data</option>
                    <option value="5">5 de Junho (Segunda)</option>
                    <option value="6">6 de Junho (Terça)</option>
                    <option value="7">7 de Junho (Quarta)</option>
                    <option value="8">8 de Junho (Quinta)</option>
                    <option value="9">9 de Junho (Sexta)</option>
                    <option value="10">10 de Junho (Sábado)</option>
                    <option value="11">11 de Junho (Domingo)</option>
                </select>
                <select 
                    className="block ml-12 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#5BB6AE] sm:text-sm sm:leading-6"
                    style={{marginTop:'10px',
                    backgroundColor: "white",
                    color: "grey",
                    fontSize: "20px",
                    borderRadius: "10px",
                  }}>
                    <option value="">Selecione a hora</option>
                    <option value="5">9:00-11:00</option>
                    <option value="6">11:00-13:00</option>
                    <option value="7">14:00-16:00</option>
                    <option value="8">16:00-18:00</option>
                    <option value="9">18:00-20:00</option>
                </select>
                <div className="flex items-center ml-5">
                  <form onSubmit={handleModalSubmit}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        className=" absolute top-3 right-7 text-gray-500 rounded mt-4  py-1 px-2 border-0 text-5xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setshowTextModal(false)}
                      >
                        ×
                      </button>
                      <button
                        type="submit"
                        className="relative ml-16 py-4 px-14 rounded-xl mt-5 bg-[#95A6A4] text-white shadow-sm hover:bg-[#037971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#037971]"
                        // className="relative bg-[#595959] hover:bg-[#0b0b0b] text-white py-4 px-14 rounded-xl mt-5 ml-16"
                        onClick={() => {
                          setshowTextModal(false)
                        }}
                      >
                        <span
                          className="text-xl font-bold"
                        >
                          {" "}
                          Cancelar{" "}
                        </span>
                      </button>
                      <button
                        type="submit"
                        className="relative bg-[#5BB6AE] hover:bg-[#037971] text-white py-4 px-14 rounded-xl mt-5 mr-10 ml-4"
                        onClick={OpenText2}
                      >
                        <span className="text-xl font-bold"> Confirmar</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
            </div>
          )}

          {showText2 && (
            <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="rounded-xl max-w-xl text-left absolute z-10 bg-gray-100 rounded-md pt-20 pl-14 pr-24 pb-20 flex flex-col items-start ">
                <h4 className="text-center text-3xl mb-4 ml-6">
                  O aluguer do material tem o custo de 10 €.
                </h4>
                <h4 className="flex flex-row items-center justify-start text-left text-3xl mb-4 ml-20">
                  Pretende efetuar o aluguer?
                </h4>
                <div className="flex items-center ml-5">
                  {/*Não apagar importante para o filtrar */}
                  {/* <select
                                        className="border border-gray-400 p-2 mb-4"
                                        //value={typeOfReading}
                                        onChange={handleTypeOfReading}
                                    >
                                        <option value="Currently Reading">Currently Reading </option>
                                        <option value="Finished Reading">Finished Reading</option>
                                    </select> */}

                  <form onSubmit={handleModalSubmit}>
                    {/* <h4 className="mt-6 text-xl font-semibold ">Current page:</h4>
                                        <input
                                            type="number"
                                            name="pageNumber"
                                            className="border border-gray-400 p-2 mr-2" placeholder={pageNumber}
                                        /> */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        className=" absolute top-3 right-7 text-gray-500 rounded mt-4  py-1 px-2 border-0 text-5xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => {
                          setShowText3(false)
                          setShowText2(false)
                        }}
                      >
                        ×
                      </button>

                      <button
                        type="submit"
                        className="relative py-4 px-14 rounded-xl mt-5 bg-[#95A6A4] text-white shadow-sm hover:bg-[#037971] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#037971]"
                        // className="relative bg-[#595959] hover:bg-[#0b0b0b] text-white py-4 px-14 rounded-xl mt-5"
                        onClick={() => {
                          setShowText3(false)
                          setShowText2(false)
                        }}
                      >
                        <span
                          className="text-xl font-bold"
                        >
                          {" "}
                          Cancelar{" "}
                        </span>
                      </button>
                      <button
                        type="submit"
                        className="relative bg-[#5BB6AE] hover:bg-[#037971] text-white py-4 px-14 rounded-xl mt-5 mr-10 ml-4"
                        onClick={OpenFinalModal}
                      >
                        <span className="text-xl font-bold"> Confirmar</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
            </div>
          )}
          {showText3 && (
            <div className=" fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <div className="rounded-xl max-w-xl text-left absolute z-10 bg-gray-100 rounded-md pt-20 pl-14 pr-24 pb-20 flex flex-col items-start ">
                <h4 className="text-center text-3xl mb-4 ml-6">
                  Aluguer efetuado com sucesso.
                </h4>
                <h4 className="flex font-bold text-3xl text-[#5BB6AE]"style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto' }}>
                  Aluguer efetuado!
                </h4>
                <div className="flex items-center ml-5">
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <button
                      className=" absolute top-3 right-7 text-gray-500 rounded mt-4  py-1 px-2 border-0 text-5xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => {
                        setShowText3(false)
                        setShowText2(false)
                        setshowTextModal(false)
                      }}
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>

              <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
            </div>
          )}

          <footer class="mt-40 w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
            <div class="text-center">
              <div>
                <a class="flex-none text-xl font-medium text-[#5BB6AE] dark:text-white">
                  catch.a.swell@gmail.com
                </a>
                <p class="text-gray-900">
                  Contacto telefónico: (+351) 233 011 236
                </p>
              </div>
              <div class="mt-3">
                <p class="text-gray-500">
                  Nós fazemos parte da família{" "}
                  <a href="/home" class="text-[#5BB6AE]">
                    Catch a swell.
                  </a>
                </p>
                <p class="text-gray-500">
                  Localização: Avenida dos Pescadores nº10, Praia da Cova Gala
                  3090-667 Figueira da Foz, Portugal
                </p>
                <p class="text-gray-500">
                  © CatchASwell. 2015. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
};

export default Tamanho;
