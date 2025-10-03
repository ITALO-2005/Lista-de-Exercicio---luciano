import React, { useState } from 'react';

function MudaCorDeFundo() {
  const [cor, setCor] = useState('#FFFFFF'); 
  const cores = ['#ADD8E6', '#90EE90', '#FFB6C1', '#F0E68C'];

  const alterarCor = () => {
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    setCor(novaCor);
    document.body.style.backgroundColor = novaCor;
  };

  return (
    <div>
      <button onClick={alterarCor}>Mudar Cor de Fundo</button>
    </div>
  );
}
export default MudaCorDeFundo;