import React, { useState } from 'react';

function MostrarOcultar() {
  const [visivel, setVisivel] = useState(true);

  return (
    <div>
      <button onClick={() => setVisivel(!visivel)}>
        Mostrar/Ocultar
      </button>
      {visivel && <p>Este parágrafo pode ser ocultado.</p>}
    </div>
  );
}
export default MostrarOcultar;