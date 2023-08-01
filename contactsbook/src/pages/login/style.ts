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
@media(max-width:950px){
    flex-direction: column;
}  

`
export const StyledLogoDiv = styled.div`
width: 50%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
@media(max-width:950px){
    width: 100%;
    height:30%;
}  
> img {
    width:100%;
    @media(max-width:950px){
        width: 100%;
        height:100%;
    }
}
`

export const StyledLoginDiv = styled.div`
width: 50%;
height:100%;
background-color: var(--color-gray-800);
display:flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
gap:15px;
border-radius: 0px 20px 20px 0px;
padding: 20px;
@media(max-width:950px){
    width: 100%;
    height:70%;
    gap:1px;
    border-radius: 0px 0px 20px 20px;
    padding: 5px;
}
`

export const StyledForm = styled.form`
width:100%;
display: flex;
flex-direction: column;
gap: 20px;
padding: 20px;
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