import styled from "styled-components";

export const StyledCard  = styled.li`
width: 250px;
height: 140px;
background-color: var(--color-gray-300);
color: var(--color-gray-900);
margin: 10px;
margin-top:10px;
margin-bottom: 20px;
padding:5px;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
border: 2px solid var(--color-blue-900);
border-radius: 10px;
`

export const CardSection  = styled.div`
width: 100%;
height: 45px;
background-color: var(--color-gray-300);
color: var(--color-gray-900);
display: flex;
justify-content: space-around;
align-content: center;
`

export const CardOption  = styled.button`
width: 80px;
height: 40px;
background-color: var(--color-gray-500);
color: var(--color-gray-100);
display: flex;
justify-content: center;
align-items: center;
font-weight:700;
border: 2px solid var(--color-blue-900);
border-radius: 10px;
`