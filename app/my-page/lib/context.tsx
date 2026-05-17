"use client"

import { createContext, type Dispatch, type ReactNode, type SetStateAction, useContext, useState } from "react"

type User = { name: string, age: number }

type UserContextProps = { user: User, setUser: Dispatch<SetStateAction<User>> }

const UserContext = createContext<UserContextProps | null>(null)

const defaultUser: User = { name: "Naruto", age: 15 }

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState(defaultUser)

    return <UserContext.Provider value={{ user: user, setUser: setUser }}>
        { children }
    </UserContext.Provider>
}

export const useUserContext = () => {
    const context = useContext(UserContext)

    if (context === null) {
        throw new Error("useUserContext must be used within UserContextProvider.")
    }

    return context
}
