import React, { useState, useContext, createContext } from 'react';

const ThemeContext = createContext();

const estilos = {
  claro: { background: '#FFF', color: '#000' },
  escuro: { background: '#333', color: '#FFF' },
};

function ThemeProvider({ children }) {
  const [tema, setTema] = useState('claro');
  
  const toggleTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <ThemeContext.Provider value={{ tema, toggleTema }}>
      {children}
    </ThemeContext.Provider>
  );
}

function AppComTema() {
  const { tema, toggleTema } = useContext(ThemeContext);

  return (
    <div style={{ padding: '20px', ...estilos[tema] }}>
      <h1>O tema atual é: {tema}</h1>
      <button onClick={toggleTema}>Mudar Tema</button>
    </div>
  );
}

function App() {
    return (
        <ThemeProvider>
            <AppComTema />
        </ThemeProvider>
    )
}
export default App;