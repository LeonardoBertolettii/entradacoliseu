
import "./CardEros.css"
import foto from "../assets/imagens/MOTEL COLISEU/Found_2047648_10489713.jpg"

function CardEros({foto}:any){
    return(
        <div className="CardEros">
            <img src={foto}></img>
        </div>
    )
}

export default CardEros;