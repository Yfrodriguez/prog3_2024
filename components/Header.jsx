import React from 'react'
import { Titulo } from '../constants/constants'
import imagen  from "../assets/imagen.jpg"

const Header = () => {
    return (
        <div>
            <br />
            <h1>{Titulo}</h1>
            <br />
            <img src="imagen.jpg" alt="mi foto" />
            <br />

        </div>
    )
}

export default Header

