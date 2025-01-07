
import "./CardEros.css"
import test from "../assets/imagens/MOTEL COLISEU/Found_2047648_10489713.jpg"

function CardEros({foto,nome}:any){
    return(
        <div className="CardEros">
            <img className="fotos" src={test}></img>
            <p className="titleE">{nome}</p>
            <div className="valEros">
                <input className="inTitle"/>
                <input className="inVal"/>
            </div>
            <div className="hr"/>
        </div>
    )
}
export default CardEros;