import React from 'react'
import { Link } from 'react-router-dom'

import './error.css'



function Error() {
  return (
    <div className='container-error'>
      <div className='main'>

        <div className='content-error'>
          <h1 className='title-error'>Ops! Página não encontrada</h1>
          <p className='subtitle'>Parece que não encontramos a pagina informada</p>
        </div>
        <div className='pagina-container'>
          <p>Retorne para página inicial</p>
          <Link to='/'>Home</Link>

        </div>
      </div>
    </div>
  )
}

export default Error