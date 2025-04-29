import './App.css';
import { useState, useEffect } from 'react';
import Card from './components/Card';
import CardEros from './components/CardEros';
import logo from './assets/imagens/logo coliseu.png';


const imagensPassione = Object.values(
  import.meta.glob('./assets/imagens/Passione/*.{png,jpg,jpeg,svg}', { eager: true })
).map((mod) => mod.default); 

const imagensRoma = Object.values(
  import.meta.glob('./assets/imagens/Roma/*.{png,jpg,jpeg,svg}', { eager: true })
).map((mod) => mod.default);

const imagensPalace = Object.values(
  import.meta.glob('./assets/imagens/Palace/*.{png,jpg,jpeg,svg}', { eager: true })
).map((mod) => mod.default);

const imagensMaximus = Object.values(
  import.meta.glob('./assets/imagens/Maximus/*.{png,jpg,jpeg,svg}', { eager: true })
).map((mod) => mod.default);

const imagensImperial = Object.values(
  import.meta.glob('./assets/imagens/Imperial/*.{png,jpg,jpeg,svg}', { eager: true })
).map((mod) => mod.default);

const imagensEros = Object.values(
  import.meta.glob('./assets/imagens/Eros/*.{png,jpg,jpeg,svg}', { eager: true })
).map((mod) => mod.default);

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
        <Card foto={imagensImperial[imagemAtual % imagensImperial.length]} nome='Imperial'></Card>
        <Card foto={imagensMaximus[imagemAtual % imagensMaximus.length]} nome='Maximus'></Card>
        <Card foto={imagensPalace[imagemAtual % imagensPalace.length]} nome='Palace'></Card>
        <Card foto={imagensRoma[imagemAtual % imagensRoma.length]} nome='Roma'></Card>
        <Card foto={imagensPassione[imagemAtual]} nome='Passione'></Card>
      </div>
      <div className='ScreenEros'>
        <img src={logo} className='logo'></img>
        <CardEros foto={imagensEros[imagemAtual % imagensEros.length]} nome="Eros"></CardEros>
      </div>
    </div>
  )
}
export default App
