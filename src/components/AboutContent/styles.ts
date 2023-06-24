import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
    min-height: 620px;
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

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: inherit;
    align-items: center;
    padding: 1rem;

    img {
        max-height: 400px;
        margin-left: 10px;
        border-radius: 24px;
    }

    @media(max-width: 1024px) {
        max-height: 340px;
    
        img {
            margin-left: 0px;
            margin-top: 24px;
            width: 523px;
            max-height: inherit;
            border-radius: 24px;
            max-width: 280px;
        }
        
    }
`