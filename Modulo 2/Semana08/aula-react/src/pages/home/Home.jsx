import CardNoticia from "../../components/HomeComponents/CardNoticia/CardNoticia"
function Home() {
    const manchete ='Este é o titulo'
    return (
        <>
            <h1>Home</h1>
            <CardNoticia titulo={manchete}/>
        </>
    )
}

export default Home
