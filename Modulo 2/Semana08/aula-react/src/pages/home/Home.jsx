import CardNoticia from "../../components/HomeComponents/CardNoticia/CardNoticia"
import ComponenteFilho from "../../components/HomeComponents/ComponenteFilho"
function Home() {
    const temNoticia = true;
    const manchete ='Com gol de Suárez, Grêmio vira sobre o America-MG e entra no G-4'
    const srcImg = 'https://s2.glbimg.com/QxgfZZ0KaNp-BRgg_Pfile-2-WM=/0x468:1536x1332/fit-in/629x354/middle/smart/filters:strip_icc():strip_exif():format(webp)/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/3/8/IFfzYCRkGLGL7jqP5YAg/fzqkz10wwaqujd6.jfif'
    const handleComponenteFilho = (message) => {
        console.log('Mensagem filho:', message);
    }
    return (
        <>
            <h1>Home</h1>
            
             {/* {temNoticia &&
            <CardNoticia titulo={manchete}
            srcImg={srcImg}/> } */}
            
            {temNoticia ? (
                <CardNoticia titulo={manchete}
                srcImg={srcImg} /> ): (
                    <span>Não existem noticias</span>
                )}
            <ComponenteFilho callback={handleComponenteFilho}/>
        </>
    )
}

export default Home
