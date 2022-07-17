import { useMemo, useState } from 'react';

import { Container, LogoContent, Logo, OptionsContent, Option, OptionsNav, Social, SocialItem } from './styles';
import { LinkedinLogo, GithubLogo } from 'phosphor-react' 
import { IHeader } from './interfaces'

export const Header = () => {

    const [option, setOption] = useState<'about' | 'projects' | 'contact'>('about')

    
    const onChangeOption = (option: 'about' | 'projects' | 'contact') => {
        setOption(option)
        console.log(option)
    }

    return (
        <Container>
            <LogoContent>
            <Logo src={'icons/logo.jpeg'} alt="Rafael Borges" />
            </LogoContent>
            <OptionsContent>
                <OptionsNav>
                <Option onClick={() => onChangeOption('about')} active={option === 'about'} >
                    Sobre
                </Option>
                <Option onClick={() => onChangeOption('projects')} active={option === 'projects'}>
                    Projetos
                </Option>
                <Option onClick={() => onChangeOption('contact')} active={option === 'contact'}>
                    Contato
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