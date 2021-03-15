import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

interface challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number,
  }

interface challengesContextData {
    level: number,
    currentExperience: number,
    challengeCompleteded: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    activeChallenge: challenge,
    experienceToNextLevel: number 
    resetChallenge: () => void,
}

interface ChallengeContextProps {
    children: ReactNode;
}


export const ChallengesContext = createContext({} as challengesContextData );

export function ChallengesProvider({ children }: ChallengeContextProps) {

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(30)
    const [challengeCompleteded, setChallengeCompleteded] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    const levelUp = () => {
        setLevel(level + 1);
    }

    function startNewChallenge() {
        console.log("starting new challenge")
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

return (
    <ChallengesContext.Provider 
        value={{ level,
                 currentExperience,
                 challengeCompleteded,
                 levelUp,
                 startNewChallenge,
                 activeChallenge, 
                 resetChallenge,
                 experienceToNextLevel,
                }}
                >
        {children}
    </ChallengesContext.Provider>
)
}


