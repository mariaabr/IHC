import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import assets from '../assets/assets';

const Horario = () => {
    const placeholderImage = 'https://picsum.photos/1000';
    const segundacena = 'https://media.istockphoto.com/id/1040899610/pt/foto/bright-neon-font-with-fluorescent-yellow-tubes-number-2.jpg?s=612x612&w=0&k=20&c=xzgF9q5UGWWi8idQmVHVV_aSvE7LJ08kMYg6p21K2b0='
    const terceiracena = 'https://internetlab.org.br/wp-content/uploads/2016/05/quadrado-azul.png'
    const quarta = 'data:image/jpeg;base64,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'

    const gridStyle = {
        marginTop: '0px',
        display: 'grid',
        gridTemplateColumns: '60% 1fr ',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr',
        height: '60vh', // mudar tamanho total da grelha
        width: '80vw',
        gap: '0.2rem',
    };

    const titleStyle = {
        display: 'flex',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr',
        height: '21vh', // mudar tamanho total da grelha
        width: '80vw',
        gap: '0.5rem',
        marginTop: '0px'
    };

    const fullpage = {
        display: 'flex',
        gridTemplateColumns: '65% 1fr',
        gridTemplateRows: '1fr 1fr',
        height: '100vh', // mudar tamanho total da grelha
        width: '70vw'
    };

    const flexContainerStyle2 = {
        display: 'flex',
        gridColumn: '1',
        gridRow: '1 / span 3',
        gap: '0.5rem'
    };

    const flexChildStyle2 = {
        flex: '1',
        backgroundImage: `url(${segundacena})`,
        backgroundSize: 'cover',
    };

    const flexContainerStyle4 = {
        display: 'flex',
        gridColumn: '1',
        //gridRow: '4',
        gap: '0.2rem'
    };

    const flexChildStyle4 = {
        flex: '1',
        backgroundImage: `url(${terceiracena})`,
        backgroundSize: 'cover',
    };

    const flexChildStyleDias = {
        flex: '1',
        backgroundColor: 'rgb(216, 208 , 199)',
        backgroundSize: 'cover',
        //borderRadiusTopLeft: '50px'
    };

    const flexChildStyleAula = {
        flex: '1',
        backgroundColor: 'rgb(105, 185 , 178)',
        backgroundSize: 'cover',
        //borderRadiusTopRight: '50px'
    };

    const flexChildStyleAulaEscolhida = {
        flex: '1',
        //backgroundColor: 'rgb(105, 185 , 178)',
        backgroundSize: 'cover',

        //borderRadiusTopRight: '50px'
    };

    const flexChildStyle1 = {
        flex: '1',
        //backgroundImage: `url(${quarta})`,
        backgroundSize: 'cover',
        backgroundColor: 'rgb(247, 235, 220)',
        //borderRadiusBottomRight: '50px'
    };

    const flexChildStyle77 = {
        flex: '1',
        backgroundImage: `url(${quarta})`,
        backgroundSize: 'cover',
        //borderRadiusBottomLeft: '50px'
    };

    const filtro = {
        lineHeight: '2.5',
        padding: '0 20px',
        marginTop: '24px',
        marginBottom: '0px',
        textAlign: 'center',
        color: 'black',
        borderRadius: '50px',
        backgroundColor: 'rgb(216, 208 , 199)',
    }

    const filtro2 = {
        //border: '0', 
        lineHeight: '0.55',
        padding: '25px',
        fontSize: '25px',
        textAlign: 'center',
        color: 'black',
        borderRadius: '25px',
        //backgroundColor: 'rgb(216, 208 , 199)',
    }

    const filtrarPor = {
        marginTop: '10px',
        textAlign: 'left',
        gap: '0.1rem',
    }

    const [showText, setShowText] = useState(false);
    const [infoaula, setInfoAula] = useState(false);
    const [pageNumber, setPageNumber] = useState(23);
    const [pageNumberTotal, setPageNumberTotal] = useState(570);
    const [typeOfReading, setTypeOfReading] = useState("Currently Reading");

    const handleButtonClick = () => {
        setShowText(true);
    }

    const handleModalSubmit = (event) => {
        event.preventDefault();
        const newPageNumber = event.target.elements.pageNumber.value;
        setPageNumber(newPageNumber);
        setShowText(false);
    }

    const handleInfoAula = (event) => {
        event.preventDefault();
        if (!infoaula) {
            setInfoAula(true);
        } else {
            setInfoAula(false);
        }
    }

    // const handleTypeOfReading = (event) => {

    //     setTypeOfReading(event.target.value);

    // }

    //acabar esta função depois
    const handleModalSubmitTotal = (event) => {
        event.preventDefault();
        const newPageNumberTotal = event.target.elements.pageNumberTotal.value;
        setPageNumber(newPageNumberTotal);
        setShowText(false);
    }



    return (
        <html className="h-screen px-40 ml-10">
            <body >
                <main className="mt-9">
                    <div >
                        <div style={titleStyle}>

                            <div style={{ height: '10px', textAlign: 'left', marginBottom: '' }}>
                                <Link to="/home" className="text-black"> Voltar </Link>
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
                                <p style={{ textAlign: 'center', marginTop: '0px', fontSize: '50px' }}><b>Horário das aulas de Surf</b></p>
                                <button style={filtro}>
                                    Filtrar por:
                                </button>
                            </div>

                        </div>


                        <div style={gridStyle}>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyleDias}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '20px' }}><b>Segunda</b></p></div>
                                <div style={flexChildStyleDias} ><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '20px' }}><b>Terça</b></p></div>
                                <div style={flexChildStyleDias} ><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '20px' }}><b>Quarta</b></p></div>
                                <div style={flexChildStyleDias} ><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '20px' }}><b>Quinta</b></p></div>
                                <div style={flexChildStyleDias} ><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '20px' }}><b>Sexta</b></p></div>
                                <div style={flexChildStyleDias} ><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '20px' }}><b>Sábado</b></p></div>
                                <div style={flexChildStyleDias}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '20px' }}><b>Domingo</b></p></div>
                            </div>
                            <div style={flexContainerStyle4}>
                                {/* colocar a cena do if e muda a informação que está ao lado tipo mais 1 do gabriel*/}
                                <div style={flexChildStyleAulaEscolhida} className="bg-[#5BB6AE] hover:bg-[#037971] " onClick={handleInfoAula}><button><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px', marginLeft: '14px' }}>09:00-11:00</p></button></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>09:00-11:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>09:00-11:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>09:00-11:00</p></div>
                                <div style={flexChildStyle1}   ></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>09:00-11:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>09:00-11:00</p></div>
                            </div>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>11:00-13:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>11:00-13:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>11:00-13:00</p></div>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                            </div>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>14:00-16:00</p></div>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                            </div>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>16:00-18:00</p></div>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>16:00-18:00</p></div>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>16:00-18:00</p></div>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                            </div>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyle1} />
                                <div style={flexChildStyle1} />
                            </div>

                            {infoaula ? (<div
                                style={{
                                    gridColumn: '2',
                                    gridRow: '1 / span 4',
                                    //backgroundImage: `url(${quinta})`,
                                    backgroundSize: 'cover',
                                    margin: ' 0 50px 0',
                                    gap: '0.2rem',
                                    paddingLeft: '40px'
                                    //textJustify:'auto', 
                                    //display: 'justify-content:center',
                                }}
                            >
                                <div>
                                    <h1 style={{ fontSize: '40px', textAlign: 'left', marginTop: '20px', padding: '0px' }}><b>Informação</b></h1>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '50px' }}>Horas: <a style={{ fontSize: '28px' }}> 09:00 - 11:00 </a> </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '15px' }}>Professor: <a style={{ fontSize: '28px' }}> Abel Costa </a> </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '15px' }}>Lotação: <a style={{ fontSize: '28px' }}> 6/7 </a> </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '15px' }}>Preço: <a style={{ fontSize: '28px' }}> 20 euros </a> </h4>
                                </div>

                                <div style={{ textAlign: 'center', marginTop: '100px', marginRight: '160px' }}>
                                    <button style={filtro2} className="bg-[#D8D0C7] hover:bg-[#A3927F]" onClick={handleButtonClick}>
                                        <h3>Marcar aula</h3>
                                    </button>
                                </div>

                            </div>) : (<div
                                style={{
                                    gridColumn: '2',
                                    gridRow: '1 / span 4',
                                    //backgroundImage: `url(${quinta})`,
                                    backgroundSize: 'cover',
                                    margin: ' 0 50px 0',
                                    gap: '0.2rem',
                                    paddingLeft: '40px'
                                    //textJustify:'auto', 
                                    //display: 'justify-content:center',
                                }}
                            >
                                <div>
                                    <h1 style={{ fontSize: '40px', textAlign: 'left', marginTop: '20px', padding: '0px' }}><b>Informação</b></h1>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '50px' }}>Horas: </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '15px' }}>Professor:</h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '15px' }}>Lotação:  </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '15px' }}>Preço:  </h4>
                                </div>

                                <div style={{ textAlign: 'center', marginTop: '100px', marginRight: '160px' }}>
                                    <button style={filtro2} className="bg-[#D8D0C7] hover:bg-[#A3927F]" onClick={handleButtonClick}>
                                        <h3>Marcar aula</h3>
                                    </button>
                                </div>

                            </div>)}
                        </div>



                        {/* Popup/modal window */}
                        {showText && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                                <div className="text-left absolute z-10 bg-gray-100 rounded-md p-4 flex flex-col items-start ">
                                    <h4 className="text-center text-3xl font-bold mb-4 ml-6" >
                                        Tem certeza que pretende 
                                    </h4>
                                    <h4 className="text-3xl font-bold mb-4 ml-20">
                                        marcar esta aula?
                                    </h4>
                                    <div className="flex items-center ml-5">
                                        <div className="ml-4">
                                            <h5 className="text-xl mt-5 mb-2">
                                                Horas: 09:00 - 11:00
                                            </h5>
                                            <h5 className="text-xl mt-5 mb-2">
                                                Professor: Abel Teixeira
                                            </h5>
                                            <h5 className="text-xl mt-5 mb-2">
                                                Lotação: 6/7
                                            </h5>
                                            <h5 className="text-xl mt-5 mb-2">
                                                Preço: 20 euros
                                            </h5>

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
                                                <button
                                                    class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 bg-[#AFD3E2] hover:bg-[#19A7CE]  rounded mt-4  py-1 px-2 border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowText(false)}
                                                >
                                                    <span class="text-gray-600" >×</span>
                                                </button>


                                                <button
                                                    type="submit"
                                                    className="relative top-60 bg-[#146C94] hover:bg-[#19A7CE] text-base text-white py-4 px-6 rounded mt-4 "
                                                >
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
                            </div>
                        )}
                    </div>
                    <footer class="mt-40 w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
                        <div class="text-center">
                            <div>
                                <a class="flex-none text-xl font-medium text-[#5BB6AE] dark:text-white">catch.a.swell@gmail.com</a>
                                <p class="text-gray-900">Contacto telefónico: (+351) 233 011 236</p>
                            </div>
                            <div class="mt-3">
                                <p class="text-gray-500">Nós fazemos parte da família <a href="/home" class="text-[#5BB6AE]">Catch a swell.</a></p>
                                <p class="text-gray-500">Localização: Avenida dos Pescadores nº10, Praia da Cova Gala 3090-667 Figueira da Foz, Portugal</p>
                                <p class="text-gray-500">© CatchASwell. 2015. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>



                </main>

            </body>
        </html>
    );
};


export default Horario;
