import React, { useState } from 'react';

function CampoDeTexto() {
  const [texto, setTexto] = useState('');

  return (
    <div>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite algo..."
      />
      <p>{texto}</p>
    </div>
  );
}
export default CampoDeTexto;