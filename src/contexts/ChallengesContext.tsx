import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { LevelUpModal } from '../components/LevelUpModal';
import { RegisterModal } from '../components/RegisterModal';

interface challenge {
    type: 'body' | 'eye',
    description: string,
    amount: number,
  }

interface challengesContextData {
    level: number,
    currentExperience: number,
    challengeCompleted: number,
    levelUp: () => void,
    startNewChallenge: () => void,
    activeChallenge: challenge,
    experienceToNextLevel: number 
    resetChallenge: () => void,
    completeChallenge: () => void,
    closeLevelUpModalClose: () => void,
    setNameUser: (name: string) => void,
    userName: string,
    closeRegisterModalClose: () => void,
    isRegisterModalOpen: boolean,

}

interface ChallengeContextProps {
    children: ReactNode;
    level: number;
    currentExperience: number;
    challengeCompleted: number;
    name: string;
}


export const ChallengesContext = createContext({} as challengesContextData );

export function ChallengesProvider({ children, ...rest }: ChallengeContextProps) {

    const [level, setLevel] = useState(rest.level ?? 1) //se nao existir coloco 1
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengeCompleted, setchallengeCompleted] = useState(rest.challengeCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false)
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(true)
    const [userName, setUserName] = useState(rest.name)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    


    useEffect(() => {
        Notification.requestPermission()
    },[])


    useEffect(() => {

        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengeCompleted', String(challengeCompleted))
        

    },[level, currentExperience, challengeCompleted])

    const levelUp = () => {
        setLevel(level + 1);
        setIsLevelUpModalOpen(true)
    }

    function closeLevelUpModalClose() {
        setIsLevelUpModalOpen(false)
    } 

    function closeRegisterModalClose() {
        setIsRegisterModalOpen(false)
    } 

    async function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/public_notification.mp3').play()

        if(Notification.permission === 'granted') { 
          new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if(!activeChallenge){
            return;
        }
        const { amount } = activeChallenge

        let finalExperience = currentExperience + amount;

        if(finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp();

        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)

        setchallengeCompleted(challengeCompleted + 1)
    }
    
    async function setNameUser(name: string) {
        setUserName(name)
        Cookies.set('name', String(name))
        closeRegisterModalClose()
    }

return (
    <ChallengesContext.Provider 
        value={{ level,
                 currentExperience,
                 challengeCompleted,
                 levelUp,
                 startNewChallenge,
                 activeChallenge, 
                 resetChallenge,
                 experienceToNextLevel,
                 completeChallenge,
                 closeLevelUpModalClose,
                 setNameUser,
                 userName,
                 closeRegisterModalClose,
                 isRegisterModalOpen,
                }}
                >
        {children}
        {isLevelUpModalOpen && <LevelUpModal /> }

    </ChallengesContext.Provider>
)
}


