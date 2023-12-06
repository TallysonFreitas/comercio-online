import styled from 'styled-components'

export const SCardLogin = styled.div`
  width: 100%;
  height: 600px;
  background-color: #ffffff;
  box-shadow: 2px 2px 15px 8px rgba(0, 0, 0, 0.2);
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

export const SInputLogin = styled.input`
  background-color: #f5f5f5;
  padding: 12px 8px 12px;
  width: 100%;
  color: #999999;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  outline-color: transparent;
`

export const SFormularioLogin = styled.form`
  max-width: 500px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const SLabelLogin = styled.label`
  position: relative;
  margin: auto;
  top: 0px;
  left: 8px;
  pointer-events: none;
  margin-top: 8px;
`

export const SButtonLogin = styled.button`
  width: 50%;
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-image: linear-gradient(15deg, #13547a 0%, #4dadad 100%);
  color: #ffffff;
  margin-top: 24px;
`

export const STitulo = styled.h2``

export const SImagemLogo = styled.img`
  height: 160px;
  width: 160px;
`

export const SLink = styled.p`
  margin-top: 8px;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    scale: 0.95;
  }
`
