import './App.css'
import Card from './components/Card'
import ted2 from './assets/imagens/Passione/Found_3608608_9215881.jpg';
import CardEros from './components/CardEros';
import logo from './assets/imagens/MOTEL COLISEU/logo coliseu.png'

function App() {

  return (
    <div className='geral'>
      <div className='Screen'>
        <Card foto={ted2} nome='Imperial'></Card>
        <Card foto={ted2} nome='Maximus'></Card>
        <Card foto={ted2} nome='Palace'></Card>
        <Card foto={ted2} nome='Roma'></Card>
        <Card foto={ted2} nome='Passione'></Card>
      </div>
      <div className='ScreenEros'>
        <img src={logo} className='logo'></img>
        <CardEros nome="Eros"></CardEros>
      </div>
    </div>
  )
}
export default App
