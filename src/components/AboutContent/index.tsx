import Image from 'next/image';
import profile from '../../../public/images/img_perfil.jpeg'
import { Container, Content, Description, Title, Text, TextDescription, ImageContainer } from './styles';

export const AboutContent = () => {

    return (
        <Container>
            <Content>
            <Description>
            <Title>
                Sobre.
            </Title> 
                <Text>
                    Olá. Eu sou Desenvolvedor frontend, de Santos, Brasil.
                </Text>

                <TextDescription>
                Desde 2016, estou na área de t.i, focando em solucionar problemas complexos da melhor forma possível, transformando problemas em layouts atratívos, intuítivos, pensando sempre na experiência do usuário. Quando não estou codando, gosto de praticar esportes.
                </TextDescription>
            </Description>
            <ImageContainer>
            <Image key="img" src={profile} alt="Rafael Borges"/>    
            </ImageContainer>
            </Content>
        </Container>
    )

}