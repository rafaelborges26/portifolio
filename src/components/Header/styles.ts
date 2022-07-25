import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { IHeader, IHeaderStyles } from './interfaces'

export const Container = styled.div`
    width: 100%;
    height: 92px;
    background: var(--black);

    display: flex;
    justify-content: space-between;
    padding: 0 26px;
    align-items: center;
`;

export const LogoContent = styled.div``

export const Logo = styled.img` 
  width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const ButtonContainerMenu = styled.div``;

export const OptionsContent = styled.div<IHeaderStyles>`
    display: flex;
    
    @media(max-width: 1024px) {
        //display: none;
        position: absolute;
        top: 92px;
        right: 0;
        width: 100%;
        transition: max-height 1s;
        overflow: hidden;
        max-height: 0;    
        justify-content: center;
        width: inherit;


        ${(props) =>
            props.menuActive &&
            css`
                max-height: 300px;
            `};
            
    }

`

export const OptionText = styled.h5`
    font-size: 18px;
`;

export const OptionsNav = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;

    @media(max-width: 1024px) {
        flex-direction: column;
        width: inherit;
    }
`

export const Option = styled.li<IHeaderStyles>`
    align-items: center;
    display: flex;
    margin-right: 15px;
    cursor: pointer;

    color: '#666';

    ${(props) =>
      props.active &&
      css`
        color: ${shade(0.2, `#fff`)};
    `};

    &:hover {
        color: ${shade(0.4, `#fff`)};
    };


    @media(max-width: 1024px) { 
     flex-direction: row;
     margin-left: 0px;
     width: 100%; 
     background: var(--text-header);
     border: 1px solid #ccc;
     justify-content: center;

     ${(props) =>
      props.menuActive &&
      css`
        width: 100%; 
    `};

    }

`

export const Social = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-left: 38px;

    @media(max-width: 1024px) { 
     flex-direction: row;
     align-items: center;
    justify-content: center;
    background: var(--text-header);
    margin-left: 0px;

    }
`

export const SocialItem = styled.li`
    margin-right: 15px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    color: var(--gray-social);

    &:hover {
        color: ${shade(0.4, `#ccc`)};
    }
`