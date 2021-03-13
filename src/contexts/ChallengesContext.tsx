import { createContext, useState, ReactNode } from 'react'

export const ChallengesContext = createContext({});

interface ChallengeContextProps {
    children: ReactNode;
}

export const challengesProvider = ({ children }: ChallengeContextProps) => {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengeCompleteded, setChallengeCompleteded] = useState(0)


    const levelUp = () => {
        setLevel(level + 1);
    }

return (
    <ChallengesContext.Provider value={{ level, currentExperience, challengeCompleteded, levelUp }}>
        {children}
    </ChallengesContext.Provider>
)
}


