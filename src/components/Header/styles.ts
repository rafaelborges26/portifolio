import styled, { css } from 'styled-components'
import { shade } from 'polished'
import { IHeader } from './interfaces'

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

export const OptionsContent = styled.div`
    display: flex;

`

export const OptionsNav = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
`

export const Option = styled.li<IHeader>`
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
`

export const Social = styled.ul`
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin-left: 38px;
`

export const SocialItem = styled.li`
    margin-right: 15px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: ${shade(0.4, `#fff`)};
    }

`