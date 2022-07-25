import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link'

import { Container, LogoContent, Logo, ButtonContainerMenu, OptionText, OptionsContent, Option, OptionsNav, Social, SocialItem } from './styles';
import { LinkedinLogo, GithubLogo, List } from 'phosphor-react' 
import { IHeader } from './interfaces'
import { Theme } from '../../styles/theme'

export const Header = ( { optionDefined, setDefinedOption } :IHeader) => {

    const { breakPoints } = Theme
    const [windowWidth, setWindowWidth] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)

    const onChangeOption = (option: 'about' | 'projects' | 'contact') => {
        setDefinedOption(option)
        handleOpenMenu()
        console.log(option)
    }

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        const width  = window.innerWidth;

        if(typeof window !== 'undefined') {
            setWindowWidth(width)
          }
    },[])

    return (
        <Container>
            <LogoContent>
            <Logo src={'icons/logo.jpeg'} alt="Rafael Borges" />
            </LogoContent>
            {  
            windowWidth <= parseInt(breakPoints.mobile) &&
            <ButtonContainerMenu onClick={handleOpenMenu}>
                <List size={30}  />
            </ButtonContainerMenu>
            }
            
            <OptionsContent menuActive={openMenu}>
            <OptionsNav>
            <Option onClick={() => onChangeOption('about')} active={optionDefined === 'about'} >
            <OptionText>
                Sobre
            </OptionText>
            </Option>
            <Option onClick={() => onChangeOption('projects')} active={optionDefined === 'projects'}>
            <OptionText>
                Projetos
            </OptionText>
            </Option>
            <Option onClick={() => onChangeOption('contact')} active={optionDefined === 'contact'}>
                <OptionText>
                Contato
                </OptionText>
            </Option>
                <Social>
                    <SocialItem>
                        <LinkedinLogo size={20}/>
                        Linkedin
                    </SocialItem>
                    <SocialItem>
                        <GithubLogo size={20}/>
                        Github
                    </SocialItem>
                </Social>

            </OptionsNav>
        </OptionsContent>   
        
        </Container>
    )
    
}