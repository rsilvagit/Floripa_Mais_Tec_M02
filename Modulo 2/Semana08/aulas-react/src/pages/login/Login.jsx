import { useState, useEffect } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState(); //hook useState
    const [password, setPassword] = useState();
    const [errorForm, setErrorForm] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setErrorForm(false)
    }, [password])

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('Dados digitados:');
        console.log('Email: ', email);
        console.log('Password:', password);
        if (email === 'rafael.sdasilva84@gmail' && password === '789456123') {
            navigate('/');
        } else {
            setErrorForm(true)
        }
    }

    return (

        <form onSubmit={handleSubmit}>
            <h4>E-mail digitado: {email}</h4>
            <input type="email" value={email} placeholder="Digite seu e-mail" onChange={handleEmailChange} />
            <input required type="password" minLength="8" value={password} placeholder="Digite sua senha" onChange={handlePasswordChange} />
            <button type="submit">Entrar</button>
            {errorForm && <span>E-mail e/ou senha inválidos</span>}
        </form>
    )
}