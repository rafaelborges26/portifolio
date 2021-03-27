import { useContext, SyntheticEvent, useState, ChangeEvent } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/Components/RegisterModal.module.css'
import Cookies from 'js-cookie'

export function RegisterModal() {
    const { level, closeLevelUpModalClose } = useContext(ChallengesContext)

    const [values, setValues] = useState({
        name: "",
      });

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };

    function onSubmit(event: SyntheticEvent) {
        event.preventDefault();
        console.log(values.name);

        Cookies.set('name', String(values.name))
      }

    return (
        <div className={styles.overlay}>        
        <div className={styles.container}>
            <header>Bem vindo!</header>
            <strong>Como você se chama?</strong>
            <p>informe seu nome para ser chamado por ele no moveitnow.</p>

            <button type="button" onClick={closeLevelUpModalClose }>
                <img src="icons/close.svg" alt="Fechar modal"/>
            </button>

            <form onSubmit={onSubmit}>

            <input type="text" name="name" id="name" value={values.name} onChange={handleInput}/>
            
            <button type="button" className="btnOk" onClick={onSubmit} >
                OK  
            </button>
            </form>
        </div>
        </div>

    )
}