import styled, { createGlobalStyle } from 'styled-components'

export const ContainerPadrao = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Poppins', sans-serif;
}

body{
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
`
