import React from 'react';
import './Botao.css';

function BotaoEstilizado({ tipo, texto }) {
  const className = `btn btn-${tipo}`;
  return <button className={className}>{texto}</button>;
}

function App() {
    return (
        <div>
            <BotaoEstilizado tipo="primary" texto="Primário" />
            <BotaoEstilizado tipo="secondary" texto="Secundário" />
            <BotaoEstilizado tipo="danger" texto="Perigo" />
        </div>
    )
}
export default BotaoEstilizado;