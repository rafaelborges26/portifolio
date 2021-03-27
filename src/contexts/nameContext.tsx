import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { LevelUpModal } from '../components/LevelUpModal';

interface userContextData {
    setUser: () => void,
   }

interface ChallengeContextProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengeCompleted: number;
}


export const UserContext = createContext({} as userContextData );
const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)

export function setUser(nameUser: string) {
    
}

export function ChallengesProvider({ children, ...rest }: ChallengeContextProps) {
 
        Cookies.set('name', String(name))        


return (
    <UserContext.Provider 
        value={{ setUser,
                }}
                >
        {children}
    </UserContext.Provider>
)
}


