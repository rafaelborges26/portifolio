import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { LevelUpModal } from '../components/LevelUpModal';

interface userContextData {
    setUser: (string) => void,
    getUser: () => string,

   }

interface userProps {
    children: ReactNode;
    name: number;
}


export const UserContext = createContext({} as userContextData );

export function userProvider({children} :userProps) {


const [name, setName] = useState<string>('')

function setUser(nameUser: string) {
    setName(nameUser)    
}

function getUser() {
    return name    
}

return (
    <UserContext.Provider 
        value={{ setUser,
                 getUser,
                }}
                >
        {children}
    </UserContext.Provider>
)

}


