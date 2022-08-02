import { useState } from 'react'
import { Theme } from '../../styles/theme'
import { ICard } from './interfaces'
import { Container, Image, Footer, Title, Description } from './styles'

export const Card = ( { title, description, image } :ICard) => {

    const { breakPoints } = Theme
    const [windowWidth, setWindowWidth] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <Container>
                <Image src="https://i.pinimg.com/564x/6f/d2/a9/6fd2a93a138c23d7e7b6d802907fe66d.jpg" alt="Image teste"  />
            <Footer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Footer>
        </Container>
    )
    
}