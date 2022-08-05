import styled from 'styled-components'

export const Container = styled.div`
    width: 330px;
    height: 300px;
    margin: 25px;
    padding: 8px 8px 4px 8px;
    border: 1px solid #ccc;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    @media (max-width: 1024px) and (min-width: 600px) {
        width: 440px;
        height: 290px;
        margin: 15px;
    }

    @media (max-width: 600px) {
        margin: 10px;
    }

`;

export const Image = styled.img`
    width: 290px;
    height: 190px;
    border-radius: 8px;

    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;

  :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);

  }

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
    justify-content: start;
    flex-direction: column;
    overflow-x: auto;
`;

export const Title = styled.p`
    font-size: 18px;
    color: var(--dark-black);
    margin-bottom: 4px;
`

export const Description = styled.span`
    font-size: 16px;
    line-height: 16px;

`

