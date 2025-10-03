import React, { useContext, createContext } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const usuario = { nome: 'Ítalo' };

  return (
    <UserContext.Provider value={usuario}>
      {children}
    </UserContext.Provider>
  );
}

function Header() {
  const usuario = useContext(UserContext);
  return (
    <header>
      <h2>Bem-vindo, {usuario.nome}!</h2>
    </header>
  );
}

function App() {
    return (
        <UserProvider>
            <Header />
        </UserProvider>
    )
}