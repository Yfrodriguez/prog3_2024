import React from 'react'

const Footer = () => {

  const persona = {
    email: "florcitarodriguez0@gmail.com"

  }
  return (
    <div>
      <br />
      <h2> Derechos Reservados del alumno, correo electronico : {persona.email}. </h2>
      <br />
      <p>Encuentrame en redes sociales:</p>
      <ul>
        <li> <a href="https://www.facebook.com/?locale=es_LA"> Facebook </a> </li>
        <li> <a href="https://www.instagram.com/"> Intagram </a> </li>
        <li> <a href="https://web.whatsapp.com/"> Whatsapp </a> </li>
      </ul>

    </div>
  )
}

export default Footer
