import logo from '../assets/logo.png'
import {useState} from 'react'
import '../styles/Header.sass'

const Header = () => {

    const [open, setOpen] = useState(false)

    const Mobile = () => {
        return(
            <div className="mobile">
                <nav className="mobile-menu">
                    <ul>
                        <li>Sobre</li>
                        <li>Benefícios</li>
                        <li>Contato</li>
                        <li>AGENDAR</li>
                    </ul>
                </nav>
            </div>
        )
    }

    return(
        <div className="header">
            <button className="header-menu" onClick={()=>{setOpen(!open)}}>{open === true ? "X" : "☰"}</button>
            {open && Mobile()}
            <figure>
                <img src={logo} alt="Logo"/>
            </figure>
            <nav className="header-nav">
                <ul>
                    <li>Sobre</li>
                    <li>Benefícios</li>
                    <li>Contato</li>
                </ul>
                <button>AGENDAR</button>
            </nav>
        </div>
    )
}

export default Header