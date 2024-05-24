import React from 'react'
import logo from "../assets/logo.png"

const Main = () => {

  const Alumno = {
    Nombre: "Yanina Florencia",
    Apeliido: "Rodriguez",
    Edad: 31,
    Direccion: "lucio v mansilla 313",
    Profesion: "estudiante",
    Curso: "2 año",
    Lenguajes: "c#, html, css, javscript , react"
  }
  return (
    <div>
      <br />
      <p>Mi Nombre es: {Alumno.Nombre} {Alumno.Apeliido} tengo {Alumno.Edad} años, soy {Alumno.Profesion}
        de la carrera de Programacion en la Universidad Tecnologica Nacional.
        Me encuentro en el {Alumno.Curso} de mis estudios y estoy muy emocionado por compartir un poco sobre mí.
        En cuanto a mis aspiraciones futuras, pretendo continuar con estudios de posgrado y capacitarme en los lenguajes
        que estoy aprendiendo como {Alumno.Lenguajes}.
      </p>
      <br />
      <img src={logo} alt="" />

    </div>
  )
}

export default Main
