import React from 'react'
import './cards.css'

function Cards(props) {
  return (

    <div className='card-geral' >
      <a target='blank' href={props.list.link}>
        <img src={props.list.logo} />
        <h2>{props.list.title}</h2>
        <p>{props.list.description}</p>
      </a>
    </div>

  )
}

export default Cards