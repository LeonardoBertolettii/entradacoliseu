import './App.css'
import Card from './components/Card'
import ted2 from './assets/imagens/Passione/Found_3608608_9215881.jpg';

function App() {

  return (
    <div className='Screen'>
      <Card foto={ted2} nome='Passione'></Card>
      <Card foto={ted2} nome='Passione'></Card>
      <Card foto={ted2} nome='Passione'></Card>
      <Card foto={ted2} nome='Roma'></Card>
      <Card foto={ted2} nome='Passione' val3h="R$100"></Card>
    </div>
  )
}
export default App
