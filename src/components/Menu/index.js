import React from 'react'
import Logo from '../../assets/images/Logo.png'
import './Menu.css'
import Button from '../Button'

//import ButtonLink from '../components'
 
function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo da Suziely" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
               Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu