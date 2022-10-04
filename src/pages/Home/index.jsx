import React from 'react'
import { FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import './home.css'


function Home() {
    return (
        <>
            <div className="container-home">
                    <div className='container-left'>

                        <div className='icons'>
                            <a href='https://github.com/lipyferreira' target='blank'><p><FaGithub /></p></a>
                            <a href='https://www.linkedin.com/in/felipe-ferreira-687b97105/' target='blank'><p><FaLinkedinIn /></p></a>
                            <a href='https://www.instagram.com/felipeferreira.jj/' target='blank'><p><FaInstagram /></p></a>
                            <a href='mailto:felipe.ferreirag3@gmail.com' target='blank'><p><AiOutlineMail /></p></a>
                        </div>

                        {/* Imagem capa */}

                        <div className='img'>

                        </div>

                    </div>

                    <div className='apresentacao-container'>
                        <h3>Olá! eu sou </h3>
                        <h1 className='name'>Felipe Ferreira </h1>
                        <p className='area'>Front-end | ReactJS | React Native </p>


                        <p className='content'>
                            Olá, fico feliz por reservar um tempo para visitar meu portfolio, espero que goste!
                            Aqui você vai encontar opções de contato e links de alguns projetos que estão no GitHub!<br /><br />
                            Fique à vontade!
                        </p>
                    </div>
            </div>
        </>
    )
}

export default Home