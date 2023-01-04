import '../styles/MainMid.sass'

import main2 from '../assets/main2.png'

const MainMid = () => {
    return(
            <div className="white">
                    <div className="white-container">
                        <div>
                            <h4><b>——————</b> VIAGENS NACIONAIS</h4>
                            <h2>Curta uma nova vibe entre amigos</h2>
                            <p>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <b>Planos Multi</b>.</p>
                            <button>AGENDAR</button>
                        </div>
                    </div>
                    <figure>
                        <img src={main2} alt=""/>
                    </figure>
            </div>
    )
}

export default MainMid