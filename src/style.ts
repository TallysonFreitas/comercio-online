import styled, { createGlobalStyle } from 'styled-components'

export const ContainerPadrao = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const EstiloGlobal = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
`
