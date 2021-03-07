import styles from '../styles/Components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rafaelborges26.png" alt="Rafael Borges"/>
            <div>
                <strong>Rafael Borges</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>

            </div>
        </div>
    )
}