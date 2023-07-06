import { useState, useEffect,useRef } from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState(); //hook useState
    const [password, setPassword] = useState();
    const [errorForm, setErrorForm] = useState(false);
    const navigate = useNavigate();
    const passwordRef = useRef(null);

    useEffect(() => {
        setErrorForm(false)
        passwordRef.current.style.borderColor = 'black';
    }, [password])
// const changeColor =()=> {
//     console.log('Mudar Cor');
//     console.log(passwordRef);
//     passwordRef.current.style.borderColor = 'red'
// }
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
            passwordRef.current.style.borderColor ='red'
            setErrorForm(true)
        }
    }
    return (
<><form onSubmit={handleSubmit}>
            <h4>E-mail digitado: {email}</h4>
            <input type="email" value={email} placeholder="Digite seu e-mail" onChange={handleEmailChange} />
            <input required type="password" minLength="8" value={password} ref={passwordRef} placeholder="Digite sua senha" onChange={handlePasswordChange} />
            <button type="submit">Entrar</button>
            {errorForm && <span>E-mail e/ou senha inválidos</span>}
        </form>
        {/* <button type="button" onClick={changeColor}>Mudar Cor</button> */}
        </>
        
        
    )
}