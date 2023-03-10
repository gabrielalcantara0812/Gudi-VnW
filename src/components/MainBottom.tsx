import '../styles/MainBottom.sass'

import main3 from '../assets/main3.png'

const MainBottom = () => {
    return(
        <div className="bottom">
            <figure>
                <img src={main3} alt=""/>
            </figure>
            <div className="bottom-container">
                <div>
                    <div>
                        <div></div>
                        <h4> VIAGENS NACIONAIS</h4>
                    </div>
                    <h2>Algumas experiências são inexplicáveis</h2>
                    <p>Conheça as fontes termais de <b>Caldas Novas, Goiás.</b> Águas quentes, num clima sereno, relaxante e natural.</p>
                    <button>AGENDAR</button>
                </div>
            </div>
        </div>
    )
}

export default MainBottom