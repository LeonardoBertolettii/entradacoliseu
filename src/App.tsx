import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import CardEros from './components/CardEros';
import logo from './assets/imagens/logo coliseu.png';


const imagensPassione = Object.values(
  import.meta.glob('./assets/imagens/Passione/*.{png,jpg,jpeg,svg}', { eager: true })
).map((mod) => mod.default); // Garante que estamos acessando o caminho da imagem

function App() {
  const [imagemAtual, setImagemAtual] = useState(0); // Índice da imagem visível no momento

  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagemAtual((prev) => (prev + 1) % imagensPassione.length); // Alterna para a próxima imagem
    }, 5000); // Troca a cada 3 segundos

    return () => clearInterval(intervalo); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <div className='geral'>
      <div className='Screen'>
        <Card foto={imagensPassione[imagemAtual]} nome='Imperial'></Card>
        <Card foto={imagensPassione[imagemAtual]} nome='Maximus'></Card>
        <Card foto={imagensPassione[imagemAtual]} nome='Palace'></Card>
        <Card foto={imagensPassione[imagemAtual]} nome='Roma'></Card>
        <Card foto={imagensPassione[imagemAtual]} nome='Passione'></Card>
      </div>
      <div className='ScreenEros'>
        <img src={logo} className='logo'></img>
        <CardEros nome="Eros"></CardEros>
      </div>
    </div>
  )
}
export default App
