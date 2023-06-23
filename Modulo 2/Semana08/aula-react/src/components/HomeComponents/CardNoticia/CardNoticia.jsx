import './styles.css'
function CardNoticia({ titulo, srcImg }) {
    return (
        <div className="card-noticia">
            <img
                src={srcImg} />
            <h3>{titulo}</h3>
        </div>
    )
}

export default CardNoticia