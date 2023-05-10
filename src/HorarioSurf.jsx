import React from "react";

const HorarioSurf = () => {
    const placeholderImage = 'https://picsum.photos/1000';
    const segundacena = 'https://media.istockphoto.com/id/1040899610/pt/foto/bright-neon-font-with-fluorescent-yellow-tubes-number-2.jpg?s=612x612&w=0&k=20&c=xzgF9q5UGWWi8idQmVHVV_aSvE7LJ08kMYg6p21K2b0='
    const terceiracena = 'https://internetlab.org.br/wp-content/uploads/2016/05/quadrado-azul.png'
    const quarta = 'data:image/jpeg;base64,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'
    //const quinta = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDzcZFRkrKzctLSsrKysrLSsrKysrKystLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QAOhAAAwABAgMFBQUHAwUAAAAAAAECEQMSBCFRBRMxQXFSYYGRsRQiMkKhBiNiwdHh8WOC8BUzcnOy/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD0EoOUSUMlASZGKSShkyBSkYpLmRkyAKkYoCmRkyACgJQNmQ1AClASgcoC2AI2F7B+wvYBn2FbDTsKcAZnALg1OAdgGXYBUmqpAcAZXAtyaqkXUgZnItyaakXUgZ6kDA+pF0gEUhdIfSF0gFYKGYIA2UNlAyhsSBcSNUklDJQEmRsySZGTIEmRkyXMjZkAZkZMBTIyZABSEpGKQlIC9pe0apL2gJ2lbR+0pyBncguTQ5BcgZnIupNVSLqQMtSLqTVUiqkDNUiqk1VIqpAzVIqkaaQqkBnpCqRopC6QCcEDwQBsodIEodKAKUNlAyhsoApQ2UVKGygLmRkySUNlASZGTJJQxIClIakV9ohdX6J4LXEz0fyYDVJe0V9qno/ky/tU9H8mAzaU5A+1z0r5Mr7VPR/JgG5AclPiZ6P5Mp8RPR/JgVUi6kPvpfu9U0i2gM9SKqTTSFUgM1IVSNNIVSAzUhVI0UhVIDPSFUjRSE0gFYIHgoB0obKBlDZQByhsoGUNlAHKGwgYQ2UAcoZKBlDZQFyhXGvlEe3XP0X/ABGiUZdfnrSvYhv4v/CAZLlckgu8Ml3in8i+9KNW8neGbvUTvUBp7wneGbvUTvUBp7wm8yvWBeqwjU9tZTXlgXwjzGPZpz8AOHfN/APgfDU/9lfRBR0hVI0UhVIgz0hVI0UhVIDNSFUjRSF0gM1oTSNFoVSATggeCANlDpQEIbKAOUOlAShsoA5Q6UBKGygDlDJQMoZKAOUYU86urXRqfl/g3o5ei/3dU/zuq+YC6ZWSslZKCbB3g0Ytfidj5sDfvJvOV9uXUtcauoHU3lqzm/a11J9q94R2OHrm/gP7O5zb/wBSvojj6HENvkd3gdJxpJPxeafx/tgKKkLpDqQukQIpCaRopCqQCKQikaKQqkBnpCbRopCrQCcECwQB0IdCAhDpAKUOlC5Q6UAcobKAlDZQByhkgSMkBfF1t0rf8LXxfL+ZgvlpyvcjX2m/uTPt3K+HiY+KfgihJCiZAPSnOTzvbvA612lLtQ7W+tNS7mM83KfJvHvPT8PK8fMc1PmkB43S7A4T83E9rr1jh8fomdXguwuzOSfF8S3/AK9PS+spHc+50QNaOnXkgB0/2Y4VJNO2vJ79yY5dgcOva/Qzxo1pPOlTj3LnD9Z8DocL2gqanUSi34Nfgr06P3EFaHZujp81OX7zRQxgUAqkLpDaF0gE0hVIfSFUgM9IVSNFITSAz0hVo0UhVIBOCB7CAOSGSgZQ2UAcobKAlDZQByhkoGUMkA5QyQJQxAYePedXSn2VVv6L6GLiH970NOs862o/ZUx/Mx6jy36lAkKJkAskbByC6AZkioBUXkB+nrNeYz7l8msGTIU0B1OC4lp91qPL/JT/ADLozazj/wDcnH5l4Pozo8Hr95GX+Kfu3/5LzIGULoaxdIBNIXSHUKpAJpCaRopCqQGekKpGikJpAKIFggD5Q2UDKGygClDJQMobKAKUMlAyhiQBIOQUGgOJq6u2tXPi9SvlnkZHa6na47sxav3prZXplM4+t2Nxc/hUai/htJ/rgoHcupT1EjPqcLxc+PDa3+2d/wD85K0uB4zVeJ0NSU/GtSdiXzArX4rHmJmta+cad0uqls9L2Z+z2np4vWxq30/Iv6nblJcksLouSIPAafEtPbScvo1g3xWUeg7Z7OjiNKvurvJTcV55XkeY4VvGH4rkyjTktMEtBD9C8P15GzhL262PLVlr/cuf9TnJmqrxsv2bivhkK7DFtDWAyBVIVSHUgKQCKQqkaKQqkBnpCqRopC6QCMFh4IA+UMlEmRkoCShkoqUMSAuUMSBSDSAJIJFIl2pmqfhKdP0SAYga4jTn8WpC9blHC19XV1edZ2PwhZS/TxM//T0/H9XkDv32pw0+OtC+Lf0B0+2OFp4WtH6pfPBxF2dHRfIVr9nRjkl9GB66aTSaaafNNc00Eed/Znimqrh6eUvvRn9UehAs8bpx+91V0p/U9hdqU6fgk2zyPCPNaldab/UCyiMhRaNFv92/RfVGY0+MqfN4QHe8gWg8AsgU0BSGtANAJpC6Q9oXSARSFUjRSF1ICdpBm0gD5kYkRINICJBpFJBIC0g0UgkBaF8XOdLUX8LGIIDz96v3cLokK7+uofF6ey6no+Xp5CSgu9rqyRqvPMBopAVrTWnqTq6fJp5TR2uG7dhpd7Lh9UsyznaW1rDI+G802vTkA/tbthak91op4r8VPly9xk0Y2afvYa0EubecdeYvUvP9ABZRMFgRI28BG7UhdHl+i5mM6/ZGlhO358l6eYHRYLCbBZALAaDYLAW0A0NYLQCWgHI5oFoBO0gzBAGJBIovIBItAZLyAxMvIvcTcA3JeRO4m8DL2tobp3rxnlXp1ORk9DvOPx/CbG7j8HmvZ/sBnyTApWMVFECV0vN/MrJALdt+LKwQp0BZGxdagWhp1qVif7JdWA/hNF6lqV4eLfRHoISlKVySWEZOG05052rx831Y7eQOyVkVvJuAZkrIG4rcATKZWSsgRgtBZKAHBZCAQmSYJgCskyRoFgXuK3AsFsA95T1BTYuqAe9UF6xlvUEXrAHxHDS+cPa+n5X/AEMNq48U/XxQ2tcW+I94ALXL+0A1qS/FS/ggM6fsr9QGvXBWo65LL9OZU1C8Jn5ZGLXAdo8M3zt7V0XNnS0amFiVhfU5M642dYDqrWCWqc6NQdNgbFqBKzNLDTAfuL3CkGgDyTIKLSAvJZWC8AQheCgGbSbRu0mAE7Ctg/BMAZ3pAvRNOCsAZK0BdaBuaBaA5l8OZ9Th30Oy5AcAef1NB9DNejfsnp3pIruV0QHkb0dXykU9HW9k9n3C6IncT0QHj40db2TROhfsnqO4noidyuiA89p6FeyadPh30Oz3K6FrTQHNjh/caI4c2qAlIGWdAZOgaEgkgELRCWmOwXgBPdk2DsEwAraTaNwTaAraQbtIARCiAQhCgIUWUBTKZZABKwEVgAcEwFgrAFYIWQCsEwWQCsEwEQCiyFgWWUWBZYJYFllEAshRYEIQgFEIQCiEIBCiEAhRCAUQhAKZCEAhCEAhCEAhZCAQiLIBCyEAhZCAQshAIQhAIQhAP//Z'
    //const sexta = 'data:image/jpeg;base64,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'
    const fundo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAABlBMVEWKiISjop/eXufJAAAA+klEQVR4nO3PAQ0AAAjAIO1f2hy404DZ+a6hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa+hr6Gvoa8h7wB4awDiW6K3rAAAAABJRU5ErkJggg=='

    const gridStyle = {
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
        gridTemplateRows: '1fr 1fr ',
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

        textAlign: 'center',
        color: 'black',
        borderRadius: '50px',
        backgroundColor: 'rgb(216, 208 , 199)',
    }

    const filtro2 = {
        //border: '0', 
        lineHeight: '0.55',
        padding: '0 60px',
        //fontSize: '1rem',
        textAlign: 'center',
        color: 'black',
        borderRadius: '30px',
        backgroundColor: 'rgb(216, 208 , 199)',
    }

    const filtrarPor = {
        marginTop: '0px',
        textAlign: 'left',
        gap: '0.1rem',
    }


    return (
        <html className="h-screen">
            <body className="flex h-full items-center py-16">
                <main >
                    <div >
                        <div style={titleStyle}>
                            <div>
                                <div style={{ height: '10px', textAlign: 'left', marginBottom: '0px' }}>
                                    <button style={{ color: 'black', backgroundColor: 'white', padding: '0px', border: 'none' }}>
                                        <linkto>
                                            <svg class="h-8 w-8 text-red-500" width="24" height="20" viewBox="0 0 24 15" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <polyline points="15 6  9 12 15 18" />
                                            </svg>
                                            Voltar
                                        </linkto>
                                    </button>
                                </div>

                                <div style={filtrarPor}>
                                    <h1>Horário das aulas de Surf</h1>
                                    <button style={filtro}>
                                        Filtrar por:
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div style={gridStyle}>
                            {/*<div style={flexContainerStyle2}>
                            <div content="hello" style={flexChildStyle2} />
                            <div content="world" style={flexChildStyle2} />
                            </div>*/}
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
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>09:00-11:00</p></div>
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
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                            </div>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>14:00-16:00</p></div>
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                            </div>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>16:00-18:00</p></div>
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>16:00-18:00</p></div>
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>16:00-18:00</p></div>
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                            </div>
                            <div style={flexContainerStyle4}>
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyleAula}><p style={{ textAlign: 'center', marginTop: '30px', fontSize: '18px' }}>18:00-20:00</p></div>
                                <div style={flexChildStyle1}   />
                                <div style={flexChildStyle1}   />
                            </div>


                            <div
                                style={{
                                    gridColumn: '2',
                                    gridRow: '1 / span 4',
                                    //backgroundImage: `url(${quinta})`,
                                    backgroundSize: 'cover',
                                    margin: ' 0 50px 0',
                                    gap: '0.2rem'
                                    //textJustify:'auto', 
                                    //display: 'justify-content:center',
                                }}
                            >
                                <div>
                                    <h1 style={{ fontSize: '40px', textAlign: 'left', marginTop: '20px' }}>Informação</h1>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '40px' }}>Horas: <a style={{ fontSize: '28px' }}> 09:00 - 11:00 </a> </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '10px' }}>Professor: <a style={{ fontSize: '28px' }}> Abel Costa </a> </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '10px' }}>Lotação: <a style={{ fontSize: '28px' }}> 6/7 </a> </h4>
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '33px', textAlign: 'left', marginTop: '10px' }}>Preço: <a style={{ fontSize: '28px' }}> 20 euros </a> </h4>
                                </div>
                                <div>
                                    <div style={{ textAlign: 'center' }}>
                                        <button style={filtro2}>
                                            <h3>Marcar aula</h3>
                                        </button>
                                    </div>
                                </div>
                            </div>



                            {/*<div
                            style={{
                                gridColumn: '1',
                                gridRow: '5',
                                backgroundImage: `url(${quarta})`,
                                backgroundSize: 'cover',
                            }}
                            />
                            <div
                                style={{
                                    gridColumn: '2',
                                    gridRow: '1 / span 4',
                                    backgroundImage: `url(${quinta})`,
                                    backgroundSize: 'cover',
                                }}
                            />
                            <div
                                style={{
                                    gridColumn: '2',
                                    gridRow: '5',
                                    backgroundImage: `url(${sexta})`,
                                    backgroundSize: 'cover',
                                }}
                            />*/}
                        </div>
                    </div>
                </main>
            </body>
        </html>

        //<html className="h-screen">
        //     <body className="flex h-full items-center py-16">
        //         <main className="w-full max-w-md mx-auto p-6">
        //             <div >
        //                 <div className = 'flex grid-cols-1 grid-rows-2 h-20vh w-70vw gap-0.5rem'>
        //                     <div>
        //                         <h1>Horário das aulas de Surf</h1>
        //                         <div className="text-left gap-5rem">
        //                             <button className='leading-2.5 px-20 text-center text-black rounded-50px bg-rgb-216-208-199'>
        //                                 Filtrar por:
        //                             </button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="grid grid-cols-6/10 grid-rows-6 h-60vh w-70vw gap-0.2rem">
        //                   {/*<div style={flexContainerStyle2}>
        //                <div content="hello" style={flexChildStyle2} />
        //                <div content="world" style={flexChildStyle2} />
        //            </div>*/}
        //                     <div className='flex col-span-1 gap-0.2rem'>
        //                         <div className='flex-1 bg-rgb-216-208-199 bg-cover'> <p className="text-center mt-30 text-2xl"><b>Segunda</b></p></div>
        //                         <div className='flex-1 bg-rgb-216-208-199 bg-cover' ><p className="text-center mt-30 text-2xl"><b>Terça</b></p></div>
        //                         <div className='flex-1 bg-rgb-216-208-199 bg-cover' ><p className="text-center mt-30 text-2xl"><b>Quarta</b></p></div>
        //                         <div className='flex-1 bg-rgb-216-208-199 bg-cover' ><p className="text-center mt-30 text-2xl"><b>Quinta</b></p></div>
        //                         <div className='flex-1 bg-rgb-216-208-199 bg-cover' ><p className="text-center mt-30 text-2xl"><b>Sexta</b></p></div>
        //                         <div className='flex-1 bg-rgb-216-208-199 bg-cover' ><p className="text-center mt-30 text-2xl"><b>Sábado</b></p></div>
        //                         <div className='flex-1 bg-rgb-216-208-199 bg-cover'> <p className="text-center mt-30 text-2xl"><b>Domingo</b></p></div>
        //                     </div>
        //                     <div className='flex col-span-1 gap-0.2rem'>
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                     </div>
        //                     <div className='flex col-span-1 gap-0.2rem'>
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                     </div>
        //                     <div className='flex col-span-1 gap-0.2rem'>
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                     </div>
        //                     <div className='flex col-span-1 gap-0.2rem'>
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                     </div>
        //                     <div className='flex col-span-1 gap-0.2rem'>
        //                         <div className='flex-1 bg-rgb-247-235-220 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                         <div className='flex-1 bg-rgb-105-185-178 bg-cover' />
        //                     </div>
        //                     <div
        //                         className='grid-col-2 grid-row-1 grid-row-span-4 bg-cover bg-center m-0 50px 0 gap-0.2'
        //                     >
        //                         <div>
        //                             <h1 className='text-left text-4xl mt-20'>Informação</h1>
        //                         </div>
        //                         <div>
        //                             <h4 className='text-left text-3xl mt-40'>Horas: <a className="text-2xl" > 09:00 - 11:00 </a> </h4>
        //                         </div>
        //                         <div>
        //                             <h4 className='text-left text-3xl mt-10'>Professor: <a className="text-2xl" > Abel Costa </a> </h4>
        //                         </div>
        //                         <div>
        //                             <h4 className='text-left text-3xl mt-10'>Lotação: <a className="text-2xl" > 6/7 </a> </h4>
        //                         </div>
        //                         <div>
        //                             <h4 className='text-left text-3xl mt-10'>Preço: <a className="text-2xl" > 20 euros </a> </h4>
        //                         </div>
        //                         <div>
        //                             <div className="text-center">
        //                                 <button className='leading-tight px-60 text-center text-black rounded-30 bg-rgb-216-208-199'>
        //                                     <h3>Marcar aula</h3>
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     {/*<div
        //                  style={{
        //                      gridColumn: '1',
        //                      gridRow: '5',
        //                      backgroundImage: `url(${quarta})`,
        //                      backgroundSize: 'cover',
        //                  }}
        //              />
        //              <div
        //                  style={{
        //                      gridColumn: '2',
        //                      gridRow: '1 / span 4',
        //                      backgroundImage: `url(${quinta})`,
        //                      backgroundSize: 'cover',
        //                  }}
        //              />
        //              <div
        //                  style={{
        //                      gridColumn: '2',
        //                      gridRow: '5',
        //                      backgroundImage: `url(${sexta})`,
        //                      backgroundSize: 'cover',
        //                  }}
        //              />*/}
        //                 </div>
        //             </div>
        //         </main>
        //     </body>
        // </html>
        // <html >
        //     <body className="flex h-full items-center py-16">
        //         <main className="w-full max-w-md mx-auto p-6">

        //             <div className="flex grid-cols-3 grid-rows-2 gap-0.5rem">
        //                 <div>
        //                     <h1>Horário das aulas de Surf</h1>
        //                     <div className="text-left gap-5rem">
        //                         <button className="leading-2.5 px-20 text-center text-black rounded-50px bg-rgb-216-208-199">
        //                             Filtrar por:
        //                         </button>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="grid grid-cols-3 gap-1">
        //                     <div className="grid col-span-2 grid-cols-7 gap-1">
        //                         <div className="flex gap-0.2rem">
        //                             <div className="flex-1 bg-rgb-216-208-199 bg-cover">
        //                                 <p className="text-center mt-30 text-2xl">
        //                                     <b>Segunda</b>
        //                                 </p>
        //                             </div>
        //                             <div className="flex-1 bg-rgb-216-208-199 bg-cover">
        //                                 <p className="text-center mt-30 text-2xl" >
        //                                     <b>Terça</b>
        //                                 </p>
        //                             </div>
        //                             <div className="flex-1 bg-rgb-216-208-199 bg-cover">
        //                                 <p className="text-center mt-30 text-2xl">
        //                                     <b>Quarta</b>
        //                                 </p>
        //                             </div>
        //                             <div className="flex-1 bg-rgb-216-208-199 bg-cover">
        //                                 <p className="text-center mt-30 text-2xl" >
        //                                     <b>Quinta</b>
        //                                 </p>
        //                             </div>
        //                             <div className="flex-1 bg-rgb-216-208-199 bg-cover">
        //                                 <p className="text-center mt-30 text-2xl" >
        //                                     <b>Sexta</b>
        //                                 </p>
        //                             </div>
        //                             <div className="flex-1 bg-rgb-216-208-199 bg-cover">
        //                                 <p className="text-center mt-30 text-2xl" >
        //                                     <b>Sábado</b>
        //                                 </p>
        //                             </div>
        //                             <div className="flex-1 bg-rgb-216-208-199 bg-cover">
        //                                 <p className="text-center mt-30 text-2xl">
        //                                     <b>Domingo</b>
        //                                 </p>
        //                             </div>

        //                             <div className="flex col-span-1 gap-0.2rem">
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                             </div>
        //                             <div className="flex col-span-1 gap-0.2rem">
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                             </div>
        //                             <div className="flex col-span-1 gap-0.2rem">
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                             </div>
        //                             <div className="flex col-span-1 gap-0.2rem">
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                             </div>
        //                             <div className="flex col-span-1 gap-0.2rem">
        //                                 <div className="flex-1 bg-rgb-247-235-220 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                                 <div className="flex-1 bg-rgb-105-185-178 bg-cover" />
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div
        //                         className="grid-col-2 grid-col-span-1 grid-row-1 grid-row-span-4 bg-cover bg-center m-0 50px 0 gap-0.2"
        //                     >
        //                         <div>
        //                             <h1 className="text-left text-4xl mt-20">Informação</h1>
        //                         </div>
        //                         <div>
        //                             <h4 className="text-left text-3xl mt-40">
        //                                 Horas: <a className="text-2xl"> 09:00 - 11:00 </a>{" "}
        //                             </h4>
        //                         </div>
        //                         <div>
        //                             <h4 className="text-left text-3xl mt-10">
        //                                 Professor: <a className="text-2xl"> Abel Costa </a>{" "}
        //                             </h4>
        //                         </div>
        //                         <div>
        //                             <h4 className="text-left text-3xl mt-10">
        //                                 Lotação: <a className="text-2xl"> 6/7 </a>{" "}
        //                             </h4>
        //                         </div>
        //                         <div>
        //                             <h4 className="text-left text-3xl mt-10">
        //                                 Preço: <a className="text-2xl"> 20 euros </a>{" "}
        //                             </h4>
        //                         </div>
        //                         <div>
        //                             <div className="text-center">
        //                                 <button className="leading-tight px-60 text-center text-black rounded-30 bg-rgb-216-208-199">
        //                                     <h3>Marcar aula</h3>
        //                                 </button>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </main>
        //     </body>
        // </html>
    );
};


export default HorarioSurf;
