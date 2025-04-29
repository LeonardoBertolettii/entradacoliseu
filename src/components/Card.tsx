import './Card.css'
import pilar from '../assets/imagens/pilar.png';

function Card({foto,nome}:any) {
return(
    <div className="card">
        <img className='fts' src={foto} alt='erro'/>
        <p className='title'>{nome}</p>
        <img className='pilar' src={pilar}/>
        <div className='especs'>
        <input className='inTitle'/>
            <input className='inVal'/>
        </div>
        <img className='pilar' src={pilar}/>
        <div className='especs'>
            <input className='inTitle'/>
            <input className='inVal'/>
        </div>
        <img className='pilar' src={pilar}/>
        <div className='especs'>
            <input className='inTitle'/>
            <input className='inVal'/>
        </div>
    </div>
)
}
export default Card