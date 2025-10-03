import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1);
  };

  const diminuir = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <h2>Valor: {contador}</h2>
      <button onClick={aumentar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  );
}
export default Contador;