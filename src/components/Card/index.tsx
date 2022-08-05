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
                <Image src={image} alt={title}  />
            <Footer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Footer>
        </Container>
    )
    
}