import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/Components/Profile.module.css'

export function Profile() {
    const { level, userName } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rafaelborges26.png" alt="Rafael Borges"/>
            <div>
                <strong>{userName}</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                   Level {level}</p>

            </div>
        </div>
    )
}