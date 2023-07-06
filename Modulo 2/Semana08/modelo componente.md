export default function ComponenteFilho(){
    return(
        <></>
    )
}

Exemplo if e ternaraios

const valor = true;
const qtd = 12;

// if (valor) {
//   console.log('O valor é true.')
// } else {
//   console.log('O valor é false.')
// }

let mensagem2 = valor ? 'O valor é true.' : 'O valor é false.';
console.log(mensagem2)

const usuarioAutenticado = false;
const nome = 'João'
const mensagem = usuarioAutenticado && `Seja bem vindo ${nome}`
console.log(mensagem)


useContext

adicionar no header
 const { theme, toggleTheme } = useContext(ThemeContext)

adicionara no app

const {theme} = useContext(ThemeContext)

 <div className={theme =='light'? 'App' : 'App dark-theme'}>