import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className='conteudo'>
        <h1>Cronometro</h1>
        <div className='temporizador'>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
        </div>
        <div className='botoes'>
          {running ? (
            <button onClick={() => setRunning(false)}>Parar</button>
          ) : (
            <button onClick={() => { setRunning(true) }}>Começar</button>
          )
          }
          <button onClick={() => { setTime(0) }}>Resetar</button>
        </div>
      </div>
    </>
  )
}

export default App
