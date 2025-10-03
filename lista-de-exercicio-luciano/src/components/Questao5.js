import React, { useState } from 'react';

function Alerta({ mensagem }) {
  const [mostrar, setMostrar] = useState(true);

  if (!mostrar) {
    return null;
  }

  return (
    <div style={{ padding: '15px', backgroundColor: 'yellow', border: '1px solid orange' }}>
      {mensagem}
      <button onClick={() => setMostrar(false)} style={{ marginLeft: '20px', background: 'none', border: 'none', cursor: 'pointer' }}>
        X
      </button>
    </div>
  );
}
export default Alerta;