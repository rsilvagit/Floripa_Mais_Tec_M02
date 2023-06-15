
import React, { useState } from 'react';
import Formulario from './components/Formulario';
import { Negociacao } from './models/negociacoes';


function App() {
  const [negociacoes, setNegociacoes] = useState([]);

  const onSubmit = (data, quantidade, valor) => {
    let negociacao = new Negociacao(data, quantidade, valor);
    negociacoes.push(negociacao)
    setNegociacoes(negociacoes);
    console.log(negociacoes);
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center mb-4">Lista de negociações</h1>
        <Formulario onSubmit = {onSubmit}/>
        
      </div>
    </>
  )
}

export default App
