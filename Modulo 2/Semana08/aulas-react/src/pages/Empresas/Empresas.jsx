// import { useParams } from "react-router-dom"
import { useLocation } from "react-router-dom"
export default function Empresas() {
    const location  = useLocation();
    const searchParams = new URLSearchParams(location.search)
    
    // searchParams.get('status');
    searchParams.forEach((value, key)=>{
        console.log(`(${key}, ${value})`);
    });
    return (
        <>
         <h1>Empresas</h1>
        </>
    )
}