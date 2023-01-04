import "../styles/Footer.sass"

import logo from '../assets/logo.png'

const Footer = () => {
    return(
        <div className="footer">
            <div>
                <figure>
                    <img src={logo} alt="logo"/>
                </figure>
                <ul>
                    <li>Sobre nós</li>
                    <li>Mural de memórias</li>
                    <li>Eventos Gudi</li>
                    <li>Nosso blog</li>
                </ul>
            </div>
            <div>
                <h2>Contatos</h2>
                <ul>
                    <li>Chat Virtual</li>
                    <li>Sac Online</li>
                    <li>Ouvidoria</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <h2>Benefícios</h2>
                <ul>
                    <li>Conta digital Gudi</li>
                    <li>Viaje com Milhas</li>
                    <li>C6 Átomos</li>
                    <li>iD Jovem</li>
                </ul>
            </div>
            <div>
                <h2>Lugares</h2>
                <ul>
                    <li>O melhor do Brasil</li>
                    <li>Cidades frequentes</li>
                    <li>Pontos turísticos</li>
                    <li>Restaurantes</li>
                </ul>
            </div>
            <div>
                <h2>Curiosidades</h2>
                <ul>
                    <li>Cultura e tradições</li>
                    <li>Pratos típicos</li>
                    <li>Mitos brasileiros</li>
                    <li>Carnaval</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer