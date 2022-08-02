import styled from 'styled-components'

export const Container = styled.div`
    width: 330px;
    height: 268px;
    margin: 25px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) and (min-width: 600px) {
        width: 440px;
        height: 330px;
        margin: 15px;
    }

    @media (max-width: 600px) {
        margin: 10px;
    }

`;

export const Image = styled.img`
    width: 308px;
    height: 200px;

    @media (max-width: 1024px) and (min-width: 600px) {
        width: 400px;
        height: 200px;
    }

`;

export const Footer = styled.div`
    padding-top: 8px;
    height: 70px;
    width: -webkit-fill-available;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
`;

export const Title = styled.p`
    font-size: 18px;
    line-height: 12px;
    color: var(--dark-black);
`

export const Description = styled.span`
    font-size: 16px;
    line-height: 12px;
`

