import styled from "styled-components";

export const StyledHeader = styled.nav`
width: 100vw;
height: 100px;
background-color: var(--color-gray-800);
display: flex;
justify-content: space-between;
padding:10px;
padding-left: 40px;
padding-right: 40px;
position: absolute;
border-bottom:2px solid var(--color-blue-900);
top: 0;
> img {
    width: 20%;
}
`
export const StyledUserContainer = styled.div`
width: 70%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
> div {
    display: flex;
    gap: 40px;
}

`

export const StyledHeaderBottonsCont = styled.div`
width: 30%;
display: flex;
gap:15px;
justify-content: flex-end;
> button {
    width: 80px;
    heigth:10%;
    border-radius: 30%;
    border: 2px solid var(--color-blue-900);
}
`

export const StyledMainCont = styled.main`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
marging: 0 auto;
padding-top: 20px;
gap:20px;
position:fixed;
top: 100px;
>div{
    width:100%;
    max-height:100px;
    display: flex;
    justify-content: space-between;
    padding:0px 70px 0px ;
}

> span {
    width: 100%;
    height: 300px;
    display: Flex;
    justify-content: center;
    align-items:center;
    
}
`

export const StyledButtonAdd = styled.button`
    width: 250px;
    height:40px;
    border-radius: 10px;
    border: 2px solid var(--color-blue-900);

`

export const StyledList = styled.ul`
    width:90%;
    height:50%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;

`