import { createContext, useState } from "react"
//export {ThemeContext,ThemeProvider}

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{

    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        console.log('Alterar Tema');
        setTheme(theme === 'light' ?'dark' : 'light')
      }

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}