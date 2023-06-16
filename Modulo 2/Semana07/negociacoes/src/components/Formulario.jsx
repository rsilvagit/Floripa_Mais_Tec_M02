
import React, {useRef, useState} from 'react';
import propTypes from 'prop-types';

function Formulario({onSubmit}) {
    const[data, setData] = useState('');
    const[quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const inputRef = useRef(null);
    console.log(inputRef);
    
    const handleSumit = (evento) => {
        evento.preventDefault(); // preventDefault evita que a pagina seja recarregada na submissão
        setData(''); // faz com que o formulário limpe após a submissão
        setQuantidade('');
        setValor('');
        inputRef.current?.focus();// faz com que o focu vá para a data após submeter o formulario
        onSubmit(data,quantidade,valor);
    };
    
    

    return(
        <form className='form' onSubmit={handleSumit}>
            <div className='rb-3'>
               <label htmlFor='data' className='form-label'>Data</label>
                <input type='date' className='form-control' id="data" value={data} onChange={(evento)=>setData(evento.target.value)} ref={inputRef}/>
            </div>
            <div className='rb-3'>
                <label htmlFor='form-label'>Quantidade</label>
                <input type='number' className='form-control' id="quantidade" value={quantidade} onChange={(evento)=>setQuantidade(evento.target.value)}/>
            </div>

            <div className='rb-3'>
                <label htmlFor='valor' className='form-label'>Valor</label>
                <input type='number' className='form-control' id="valor" min={0.01} max={10000000000} step={0.01} value={valor} onChange={(evento)=> setValor(evento.target.value)}/>
            </div>

            <button className='pimary'type="submit">Cadastrar</button>
        </form>
    )

}
Formulario.PropTypes = {
    onSubmit: propTypes.func
  };

export default Formulario;
