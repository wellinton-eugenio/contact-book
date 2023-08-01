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
    @media (max-width:900px){
        width:250px;
        height:80px
    }
}
@media (max-width:900px){
    height:200px;
    flex-direction: column;
    align-items: center;
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
>h1{
    @media(max-width:900px){
        font-size:20px;
    }  
}
@media(max-width:900px){

}
`

export const StyledHeaderBottonsCont = styled.div`
width: 30%;
display: flex;
gap:15px;
justify-content: flex-end;
@media(max-width:900px){
    width:100%;
    justify-content: center;
 }
> button {
    width: 80px;
    heigth:10%;
    border-radius: 30%;
    border: 2px solid var(--color-blue-900);
    @media(max-width:900px){
        border-radius: 10%;
    }
}
`

export const StyledMainCont = styled.main`
width: 100vw;
height: 800px;
display: flex;
flex-direction: column;
marging: 0 auto;
padding-top: 20px;
gap:20px;
position:fixed;
top: 100px;
@media(max-width:900px){
    top:200px;
    align-items:center;
}
>div{
    width:100%;
    max-height:100px;
    display: flex;
    justify-content: space-between;
    padding:0px 70px 0px ;
    >h1{
        @media(max-width:900px){
            font-size:25px;
        }  
    }
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
    @media(max-width:900px){
        width: 150px;
        height:40px;
    }  

`

export const StyledList = styled.ul`
    width:90%;
    height:75%;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    overflow-x: auto;
    @media(max-width:900px){
        height:70%;
        align-items:center;
    }
    @media(max-width:500px){
        width:66%;
        height:70%;
        align-items:center;
    }
`