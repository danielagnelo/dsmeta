import React from 'react'
import icon from "../../assets/img/Vector.svg"
import './styles.css'

export default function NotificationButton() {
  return (
    <>
      <div>Meu Botão</div>
      <div className="dsmeta-red-btn">
        <img src={icon} alt="Notificar" />
      </div>
    </>
  )
}
