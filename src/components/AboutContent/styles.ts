import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    background: var(--white-background);
`

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
    padding: 30px 60px 0;
    justify-content: center;

    animation: ${appearFromLeft} 1s;

    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 30px 0 0; 
    }
`

export const Description = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media(max-width: 1024px) {
        width: 100%;
        margin-bottom: 8px;
        padding: 0 18px;
    }

`

export const Title = styled.h1`
    font-size: 58px;
    color: var(--dark-black);
`

export const Text = styled.h5`
    color: var(--dark-text);
    letter-spacing: 2px;
    font-size: 17px;
    font-weight: normal;
    margin: 8px 0;
`

export const TextDescription = styled.p`
    font-size: 14px;
    color: var(--dark-black);
    font-weight: normal;
    letter-spacing: 1px;
`

export const Image = styled.img` 
    width: 50%;  
    max-height: 300px;
    max-width: 280px;
    margin-left: 10px;

    @media(max-width: 1024px) {
        max-width: 50%;
        max-height: inherit;
        margin-left: 0px;
    }

`