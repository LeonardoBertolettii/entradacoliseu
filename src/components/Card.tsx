import './Card.css'
import pilar from '../assets/imagens/Passione/pilar.png';

function Card({foto,nome}:any) {
return(
    <div className="card">
        <img src={foto} alt='erro'/>
        <p className='title'>{nome}</p>
        <img src={pilar}/>
        <div className='especs'>
        <input className='titulo'/>
            <input className='inVal'/>
        </div>
        <img src={pilar}/>
        <div className='especs'>
            <input className='titulo'/>
            <input className='inVal'/>
        </div>
        <img src={pilar}/>
        <div className='especs'>
            <input className='titulo'/>
            <input className='inVal'/>
        </div>
    </div>
)
}
export default Card