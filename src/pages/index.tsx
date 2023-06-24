import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Header, AboutContent, ProjectsContent  } from '../components'
import { useState } from 'react'

interface Props {
  level: number,
  currentExperience: number,
  challengeCompleted: number,
  name: string,
}

export default function CartList(props) {  

  const [option, setOption] = useState<'about' | 'projects' | 'contact'>('about')

  return (
    <>
    <Header optionDefined={option} setDefinedOption={setOption} />
    
    { option === 'about'
     ? (
      <AboutContent /> 
    ) : option === 'projects' &&
      <ProjectsContent /> 
    }
    </>
  )
}
