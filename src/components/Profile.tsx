import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/Components/Profile.module.css'

export function Profile() {
    const { level, userName } = useContext(ChallengesContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://i.pinimg.com/564x/86/13/c7/8613c7dec377dfaa48e2f9c41920afb0.jpg" alt="Rafael Borges"/>
            <div>
                <strong> { userName !== 'undefined' ? userName : 'Usuário' }</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                   Level {level}</p>
            </div>
        </div>
    )
}