import styled, { keyframes } from 'styled-components'
import { Theme } from '../../styles/theme'

export const Container = styled.div`
    background: var(--white-background);
`;

const appearFromLeft = keyframes` /* Animação para aparecer da esquerda */
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }

`;

export const Content = styled.section`
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px 15px 0 15px;
    
    animation: ${appearFromLeft} 1s;

    @media(min-width: 1500px) {
        margin: 0 10%;
    }
`