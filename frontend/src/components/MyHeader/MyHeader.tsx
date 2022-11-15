import React from 'react'
import logo from '../../assets/img/logo.svg'
import './styles.css'

export default function MyHeader() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/daniel.agnelo/"> @daniel.agnelo</a>
        </p>
      </div>
    </header>
  )
}
