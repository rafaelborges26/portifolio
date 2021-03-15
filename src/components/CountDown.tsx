import { useState, useEffect, useContext } from 'react'
import styles from '../styles/Components/CountDown.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
let countdownTimeout: NodeJS.Timeout;

export function CountDown() {

    const [time, setTime ] = useState(0.1 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    const { startNewChallenge } = useContext(ChallengesContext)

    function startCountDown() {
        setIsActive(true)
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout) //parar execução
        setIsActive(false)
        setTime(0.1 * 60)
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1)
            }, 1000) //set timeout algo aconteça dps de um tempo, depois de um segundo ou seja 1000, diminuirá -1 na variavel
        }else if(isActive && time === 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }

    }, [isActive, time])

    return (
       <div>
        <div className={styles.countdownContainer}>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRight}</span>
            </div>
        </div>

        { hasFinished ? (
            <button disabled className={styles.countdownButton}>
            Ciclo encerrado
            </button>
        ) : 
        (
            <>
        {isActive ? (
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountDown}>
             Abandonar ciclo
            </button>
            ) : 
            (<button type="button" className={styles.countdownButton} onClick={startCountDown}>
                Iniciar um ciclo 
            </button>
            )}
            </>
        )}
            
       </div>
    )
}