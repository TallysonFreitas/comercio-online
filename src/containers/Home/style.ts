import styled from 'styled-components'

export const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: #2a2a2a;
  border-radius: 0px 0px 16px 16px;
  padding: 8px 32px;
  color: #fff;
`

export const SNavBar = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  li {
    a {
      color: #fff;
      text-decoration: none;
      padding: 4px;
      display: flex;
      align-items: center;
    }
  }
`

export const STextoDestaque = styled.p`
  color: #4ee;
  font-weight: bold;
  margin-bottom: -24px;
`

export const SContexto = styled.p`
  color: #ddd;
  max-width: 80%;

  span {
    color: #ffffff;
    font-weight: bold;
  }
`

export const STituloDestaque = styled.h2`
  color: white;
  font-size: 40px;
`

export const SBotaoContact = styled.button`
  color: #003;
  padding: 16px;
  width: 50%;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  background-color: #00e6f9;
  transition: all ease 0.5s;
  margin-bottom: -16px;

  &:hover {
    box-shadow: 0px 0px 24px 8px rgba(0, 230, 249, 0.7);
  }
`

export const SSessaoHome = styled.section`
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    gap: 24px;
    margin-left: 16px;
  }
`

export const SImagePerfil = styled.img`
  border-radius: 50%;
  max-width: 300px;
  height: 300px;
`

export const SIcone = styled.img`
  width: 24px;
  height: 24px;
`
