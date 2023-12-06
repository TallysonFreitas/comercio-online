import styled from 'styled-components'

export const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: sticky;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.8);
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
    }
  }
`
