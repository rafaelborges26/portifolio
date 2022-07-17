import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Header } from '../components'

interface Props {
  level: number,
  currentExperience: number,
  challengeCompleted: number,
  name: string,
}

export default function CartList(props) {  
  return (
    <Header />
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
