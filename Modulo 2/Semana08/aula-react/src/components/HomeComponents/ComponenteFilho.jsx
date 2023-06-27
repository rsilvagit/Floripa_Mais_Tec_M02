//Esse componente receberá titulo e imagem
export default function ComponenteFilho({callback}){
    const handleClick= ()=>{
        callback('Messagem do Filho,')
    }
    return(
        <>
        <button onClick={handleClick}>Clique Aqui</button>
        </>
    )
}