import React from 'react';

function ListaDeTarefas() {
  const tarefas = ['Estudar React', 'Fazer o almoço', 'Ir para a academia'];

  return (
    <ul>
      {tarefas.map((tarefa, index) => (
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
  );
}
export default ListaDeTarefas;