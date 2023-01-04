import "../styles/Mural.sass"

import mural1 from "../assets/mural1.png"
import mural2 from "../assets/mural2.png"
import mural3 from "../assets/mural3.png"
import mural4 from "../assets/mural4.png"
import mural5 from "../assets/mural5.png"
import mural6 from "../assets/mural6.png"
import info1 from "../assets/info1.png"
import info2 from "../assets/info2.png"
import info3 from "../assets/info3.png"
import info4 from "../assets/info4.png"

const Mural = () => {
    return(
        <div className="mural">
            <div className="mural-text">
                <h4>use a hashtag #brasilisverigudi</h4>
                <h2>Nosso mural de Experiências</h2>
            </div>
            <div className="mural-images">
                <figure>
                    <img src={mural1} alt="" />
                </figure>
                <figure>
                    <img src={mural2} alt="" />
                </figure>
                <figure>
                    <img src={mural3} alt="" />
                </figure>
                <figure>
                    <img src={mural4} alt="" />
                </figure>
                <figure>
                    <img src={mural5} alt="" />
                </figure>
                <figure>
                    <img src={mural6} alt="" />
                </figure>
            </div>
            <div className="mural-info">
                <div className="mural-info-white">
                    <figure>
                        <img src={info1} alt="" />
                    </figure>
                    <h2>O melhor do Brasil</h2>
                </div>
                <div className="mural-info-blue">
                    <figure>
                        <img src={info2} alt="" />
                    </figure>
                    <h2>Cidades mais frequentadas</h2>
                </div>
                <div className="mural-info-white">
                    <figure>
                        <img src={info3} alt="" />
                    </figure>
                    <h2>Pontos turísticos</h2>
                </div>
                <div className="mural-info-blue">
                    <figure>
                        <img src={info4} alt="" />
                    </figure>
                    <h2>Restaurantes</h2>
                </div>
            </div>
        </div>
    )
}

export default Mural