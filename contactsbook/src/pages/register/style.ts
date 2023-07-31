import styled from "styled-components";

export const StyledMain = styled.main`
width: 100vw;
height:100vh;
background-color: var(--color-gray-900);
display: flex;
justify-content: center;
align-items: center;

`

export const StyledHomeCont = styled.div`
width:70%;
height:600px;
display:flex;
border: 3px solid var(--color-blue-900);
border-radius: 20px;

`
export const StyledLogoDiv = styled.div`
width: 50%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
> img {
    width:100%;
}

`

export const StyledRegisterDiv = styled.div`
width: 50%;
height:100%;
background-color: var(--color-gray-800);
display:flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
gap:1px;
border-radius: 20px 0px 0px 20px;
padding: 20px;
`

export const StyledForm = styled.form`
width:100%;
display: flex;
flex-direction: column;
gap: 5px;
>input{
    height:40px;
    background-color:var(--color-gray-700);
    border: 2px solid var(--color-blue-900);
    border-radius: 10px;
    padding-left: 20px;
}
>button {
    height: 40px;
    margin-top:25px;
    border-radius: 10px;
    font-weight: 600;
    font-size: larger;
}
`