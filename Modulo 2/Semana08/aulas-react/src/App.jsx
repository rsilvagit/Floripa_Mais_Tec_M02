import {
  BrowserRouter as Router, // Apenas renomeando BrowserRouter para Router
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Empresas from './pages/Empresas/Empresas.jsx'
import Empresa from './pages/Empresa/Empresa.jsx'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Login from './pages/login/Login'
import Noticias from './pages/Noticias/Noticias'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

function App() {

  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme =='light'? 'App' : 'App dark-theme'}>
      {/* <h1>APP</h1> */}
      <Router>
        <Header />
        <Routes>
          {/**/}
          <Route path='/' exact element={<Home />} />
          <Route path='login' exact element={<Login/>}/>
          <Route path='empresa/:empresa'  element={<Empresa/>}/>
          <Route path='empresas'  element={<Empresas/>}/>
          <Route path='noticias' element={<Noticias/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}