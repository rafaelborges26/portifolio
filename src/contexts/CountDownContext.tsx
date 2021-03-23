import { ReactNode, useContext, useEffect, useState } from 'react'
import { createContext } from 'react'
import { finished } from 'stream';
import { ChallengesContext } from './ChallengesContext'

interface CountDownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountDown: () => void,
    resetCountDown: () => void,
}

interface CountdownProviderProps {
    children: ReactNode;
}

let countdownTimeout: NodeJS.Timeout;


export const CountdownContext = createContext({} as CountDownContextData)

export function CountdownProvider({children} :CountdownProviderProps) {
    
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime ] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    function startCountDown() {
        setIsActive(true)
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout) //parar execução
        setIsActive(false)
        setTime(0.1 * 60)
        setHasFinished(false)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000) //set timeout algo aconteça dps de um tempo, depois de um segundo ou seja 1000, diminuirá -1 na variavel
        }else if(isActive && time === 0){
            setHasFinished(true)
            startNewChallenge()
            setIsActive(false)
        }

    }, [isActive, time])


    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountDown,
            resetCountDown,

        }}>
            {children}

        </CountdownContext.Provider>
    )
}