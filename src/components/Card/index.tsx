import React from 'react'

import './style.scss'

export default function Card() {
  return (
    <>
      <div className="card">
      <div className="card-weight-top">10</div>
        <div className="card-container">
          <img src="https://avatars.githubusercontent.com/u/36867094?v=4" alt="Imagem da carta" className="card-img" />
          <div className="card-info">
            <h4><b>John Doe</b></h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
        <div className="card-weight-bottom">10</div>
      </div>
    </>
  )
}
