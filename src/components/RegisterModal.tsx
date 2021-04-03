import { useContext, SyntheticEvent, useState, ChangeEvent, useEffect } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/Components/RegisterModal.module.css'
import Cookies from 'js-cookie'

export function RegisterModal() {
    const { isRegisterModalOpen, closeRegisterModalClose, setNameUser } = useContext(ChallengesContext)

    const [nameValue, setNameValue] = useState('')
    const [modalClose, setModalClose] = useState(false)

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
        setNameUser(values.name)
        setNameValue(values.name)
      }

    return (
      nameValue || modalClose ? (
       <div className={styles.overlay} style={{ display: 'none' }} />) 
        : (
        <div className={styles.overlay} style={{ display: 'flex' }} > :
        <div className={styles.container}>
          <header>Bem vindo!</header>
          <strong>Como você se chama?</strong>
          <p>informe seu nome para ser chamado por ele no moveitnow.</p>
          <button type="button" onClick={() => setModalClose(true)}>
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
    )
}