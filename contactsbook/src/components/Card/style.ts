import styled from "styled-components";

export const StyledCard  = styled.li`
width: 250px;
height: 120px;
background-color: var(--color-gray-300);
color: var(--color-gray-900);

margin: 10px;
margin-top:10px;
margin-bottom: 20px;
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
font-weight:700
`