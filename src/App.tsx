import { useState } from 'react';
import './App.css'
import PageContent from './components/PageContent'
import Auth from './components/Auth';
import Form from './components/Form';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function showModal() {
    prompt('Digite seu nome: ')
    setIsLoggedIn(!isLoggedIn);
  }
  
  return (
    <>
      <h1>Exercícios React</h1>
      <PageContent>
        <Auth isLoggedIn={isLoggedIn} />
        {!isLoggedIn && <button onClick={showModal}>Login</button>}
      </PageContent>
    </>
  );
}

export default App;
