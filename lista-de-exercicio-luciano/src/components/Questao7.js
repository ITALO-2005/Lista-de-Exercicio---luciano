import React, { useState } from 'react';

const tarefasIniciais = [
  { id: 1, texto: 'Aprender Hooks', concluida: true },
  { id: 2, texto: 'Criar um projeto', concluida: false },
  { id: 3, texto: 'Enviar para o GitHub', concluida: false },
];

function TodoList() {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  const marcarComoConcluida = (id) => {
    const novasTarefas = tarefas.map(tarefa => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  return (
    <ul>
      {tarefas.map(tarefa => (
        <li key={tarefa.id} style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}>
          <input
            type="checkbox"
            checked={tarefa.concluida}
            onChange={() => marcarComoConcluida(tarefa.id)}
          />
          {tarefa.texto}
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
