import './Card.css'
import pilar from '../assets/imagens/Passione/pilar.png';

function Card({foto,nome}:any) {
return(
    <div className="card">
        <img src={foto} alt='erro'/>
        <p className='title'>{nome}</p>
        <img src={pilar}/>
    </div>
)
}
export default Card