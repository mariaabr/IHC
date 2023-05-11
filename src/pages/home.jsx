import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import boards from './boardsmore.jpg';
import friends from './friendssurf.jpg';
import headboard from './headboard.png';
import seaboard from './oceanboard.jpg';
import oceanvertical from './oceanvertical.jpg';
import Footer from '../components/footer';


function Home() {
    return (
        <>
            <div className="flex flex-col justify-between min-h-screen">
                <div className="flex-grow">
                    <div className="w-full h-screen">
                        <div className="h-96 rounded-lg md:h-96">
                            <img src={boards} className="w-full h-[750px] rounded-sm mx-auto" />
                            <table>
                                <tr>
                                    <td rowSpan="2">
                                        <img src={seaboard} className="w-[850px] h-[380px]mt-0" />
                                        <img src={headboard} className="w-[850px] h-[680px]" />
                                    </td>
                                    <td>
                                        <img src={oceanvertical} className="w-[1000px] h-[1313px]" />
                                    </td>
                                </tr>
                            </table>
                            <div className="p-16 mt-6 mb-6">
                                <h3 className="text-xl font-semibold">História</h3>
                                <p className="text-lg p-4">
                                    A CatchASwell é uma empresa de desportods aquáticos fundada em 2015 pelas amigas Rafaela, Marta e Matilde. Elas tinham uma paixão compartilhada por atividades ao ar livre e por desafiar os seus limites, e queriam criar uma empresa que tornasse a prática de desportos aquáticos acessível a todos.
                                    A ideia de criar a CatchASwell surgiu quando elas perceberam que havia uma demanda crescente por atividades aquáticas na sua cidade. No entanto, muitas pessoas enfrentavam dificuldades para praticar esses desportos, seja pela falta de equipamentos adequados, pela falta de conhecimento ou pela falta de acesso a instrutores qualificados.
                                    Com base na sua própria experiência e conhecimento, Rafaela, Marta e Matilde decidiram criar uma empresa que oferecesse uma ampla variedade de atividades aquáticas, desde o surf até o surf. Elas queriam tornar a prática desses desportos mais fácil e acessível para todos, independentemente do nível de habilidade ou experiência.
                                    A CatchASwell cresceu rapidamente desde a sua fundação, e hoje é uma das principais empresas de desportos aquáticos da região. Elas oferecem aulas e equipamentos para atender às necessidades de cada cliente, e estão sempre em busca de novas formas de tornar os desportos aquáticos mais acessíveis e divertidos para todos.
                                </p>
                            </div>
                            <img src={friends} className="w-full h-[700px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;