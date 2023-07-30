import styled from "styled-components";

export const Container = styled.div`
  top: 0;
  background-color: rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  position: fixed;

  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    max-width:50px;
    background-color: tranparent;
  }

  > div {
    background-color: var(--color-gray-900);
    padding: 20px;
    box-shadow: 0  0 25px 0 rgba(0,0,0,.25);
    width: 100%;
    max-width: 360px;
    display: flex;
    flex-direction: column;
    align-itens:center;
    justify-content: center;
  }
`

export const ExitButton = styled.button`
  max-width:50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  position: relative
`