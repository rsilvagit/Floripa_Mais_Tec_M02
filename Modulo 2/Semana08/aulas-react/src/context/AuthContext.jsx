import { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [isLoggedIn, setIsLoggeddIn] = useState(false)

    const login = () => {
        setIsLoggeddIn(true)
    }

    const logout = () => {
        setIsLoggeddIn(false)
    }
    return (
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}