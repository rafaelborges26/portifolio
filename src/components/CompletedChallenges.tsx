import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/Components/CompletedChallenges.module.css';

export function CompletedChallenges() {
    const { challengeCompleteded } = useContext(ChallengesContext)
    return (
        <div className={styles.CompletedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleteded}</span>
        </div>
    )
}