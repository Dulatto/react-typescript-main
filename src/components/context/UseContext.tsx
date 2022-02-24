import React, {createContext, useState} from 'react'

export type AuthUser = {
    name: string
    email: string
}

type UserContextProviderProps ={
    children:React.ReactNode
}

export const UseContext = createContext(null)

export const UserContextProvider = ({children}: UserContextProviderProps) =>{
   const [user, setUser] = useState(null)
}