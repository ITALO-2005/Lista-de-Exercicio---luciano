import React from 'react';

// Componente
function BotaoCustom(props) {
  return (
    <button style={{ backgroundColor: props.cor, color: 'white', border: 'none', padding: '10px' }}>
      {props.texto}
    </button>
  );
}

function App() {
    return <BotaoCustom texto="Clique Aqui" cor="blue" />
}
export default BotaoCustom;