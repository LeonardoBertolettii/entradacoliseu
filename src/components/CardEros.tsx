
import "./CardEros.css"
import test from "../assets/imagens/MOTEL COLISEU/Found_2047648_10489713.jpg"

function CardEros({foto}:any){
    return(
        <div className="CardEros">
            <img className="fotos" src={test}></img>
        </div>
    )
}

export default CardEros;