import styled from "styled-components";

export const StyledFooter = styled.footer`
    width: 100vw;
    height: 50px;
    background-color: var(--color-gray-800);
    border-top: 2px solid var(--color-blue-900);
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 0;
    @media(max-width:900px){
        position:inert;
        botton: 0;
    }
`

export const StyledFooterDiv = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
`