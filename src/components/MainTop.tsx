import '../styles/MainTop.sass'

import main1 from "../assets/main1.png"

const MainTop = () => {
    return(
            <div className="main">
                <figure>
                    <img src={main1} alt=""/>
                </figure>
                <div className="main-container">
                    <div>
                        <div>
                            <div></div>
                            <h4> VIAGENS NACIONAIS</h4>
                        </div>
                        <h2>O clima perfeito, no lugar perfeito</h2>
                        <p>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
                        <button>AGENDAR</button>
                    </div>
                </div>
            </div>
    )
}

export default MainTop