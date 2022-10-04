import React from 'react'
import './projetos.css'

import Cards from '../../components/cards/index'

import git from '../../components/img/git.svg'

function Projetos() {


  const list = [
    {
      logo: git,
      title: 'React Native',
      description: 'App que encurta links tornando-os mais simples e menores.',
      link: 'https://github.com/lipyferreira/encurtador-de-links'
    },
    {
      logo: git,
      title: 'ReactJS',
      description: 'Site que busca dados referentes ao CEP informado.',
      link: 'https://github.com/lipyferreira/buscador-cep'
    },
    {
      logo: git,
      title: 'ReactJS',
      description: 'Site que lista filmes com uma breve descrição podendo salvar seus filmes favoritos.',
      link: 'https://github.com/lipyferreira/pagina-web-filmes'
    },
    {
      logo: git,
      title: 'ReactJS',
      description: 'Site de quiz de perguntas.',
      link: 'https://github.com/lipyferreira/quiz'
    },
    {
      logo: git,
      title: 'HTML-CSS-JS',
      description: 'Plataforma que busca dados do o clima de uma cidade',
      link: 'https://github.com/lipyferreira/Clima-JS'
    },
  ]


  return (

    <div className='container-projetos'>


      <div className='title-projetos'>

        <h1>Projetos</h1>
        <div id="border">
          <div className='solid'></div>
          <div className='tracejada'></div>

        </div>

      </div>
      <div className='grid'>
        {
          list.map((link, index) => {
            return (
              <div key={index} className='card'>
                <Cards list={link} />
              </div>
            )
          })
        }

      </div>
    </div>

  )
}

export default Projetos