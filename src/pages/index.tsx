import {Profile} from '../components/Profile';
import Head from 'next/head'
import {ExperienceBar} from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountDownContext';

//o que será a home da pagina
export default function Home() {
  return (
      <div className={styles.container}>   
      <Head>
        <title> Inicio | Move.it</title>
      </Head>
      
     <ExperienceBar/>

    <CountdownProvider>
      <section>
      <div>
        <Profile />
        <CompletedChallenges />
        <CountDown /> 
      </div>
      <div>
        <ChallengeBox />
      </div>
      </section>
    </CountdownProvider>

      </div>
  )
}
