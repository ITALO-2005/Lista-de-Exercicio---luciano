import React, { useState } from 'react';

function CardHover() {
  const [hover, setHover] = useState(false);

  const estiloCard = {
    padding: '20px',
    border: '1px solid black',
    transition: 'background-color 0.3s',
    backgroundColor: hover ? 'lightgray' : 'white',
  };

  return (
    <div
      style={estiloCard}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      Passe o mouse aqui!
    </div>
  );
}
export default CardHover;