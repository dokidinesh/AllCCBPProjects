import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: Roboto;
  background-color: ${props => (props.isLightTheme ? '#ffffff' : '#000000')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;
  color: #ffffff;
  font-weight: bold;
`

export const InputContainer = styled.div`
  margin-bottom: 10px;
`

export const LogoImage = styled.img`
  width: 200px;
  height: 40px;
  margin-bottom: 20px;
`

export const CustomInput = styled.input`
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #cbd5e1;
`

export const CustomLabel = styled.label`
  font-weight: bold;
  color: #7e858e;
`
