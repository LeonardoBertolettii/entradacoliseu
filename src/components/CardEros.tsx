
import "./CardEros.css"


function CardEros({foto,nome}:any){
    return(
        <div className="CardEros">
            <img className="fotos" src={foto}></img>
            <p className="titleE">{nome}</p>
            <div className="valEros">
                <input className="inTitle"/>
                <input className="inVal"/>
            </div>
            <div className="hr">
            </div>
            <div className="valEros">
                <input className="inTitle"/>
                <input className="inVal"/>
            </div>
            <div className="hr">
            </div>
            <div className="valEros">
                <input className="inTitle"/>
                <input className="inVal"/>
            </div>
        </div>
        
    )
}
export default CardEros;