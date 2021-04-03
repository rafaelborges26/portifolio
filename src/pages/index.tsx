import {Profile} from '../components/Profile';
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import {ExperienceBar} from "../components/ExperienceBar";
import styles from '../styles/pages/Home.module.css'
import { CompletedChallenges } from '../components/CompletedChallenges';
import { CountDown } from '../components/CountDown';
import { ChallengeBox } from '../components/ChallengeBox'
import { CountdownProvider } from '../contexts/CountDownContext';
import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';
import { RegisterModal } from '../components/RegisterModal'
import { useContext, useEffect, useState } from 'react';
//o que será a home da pagina

interface Props {
  level: number,
  currentExperience: number,
  challengeCompleted: number,
  name: string,
}

export default function Home(props) {  
  const { isRegisterModalOpen, closeRegisterModalClose } = useContext(ChallengesContext)
  console.log(isRegisterModalOpen)

  return (
    <>
    <ChallengesProvider level = {props.level} currentExperience= {props.currentExperience} challengeCompleted = {props.challengeCompleted} name = {props.name} >
      <div className={styles.container}>   
      <Head>
        <title> Inicio | Moveit.now</title>
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
      { props.name === 'undefined' && <RegisterModal/> }
      </ChallengesProvider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

const { level, currentExperience, challengeCompleted, name } = ctx.req.cookies //obtendo dos cookies



  return {
    props: {level: Number(level),
           currentExperience: Number(currentExperience),
           challengeCompleted: Number(challengeCompleted),
           name: String(name),
          }
  }
}
