// Style your elements here
import styled from 'styled-components/macro'

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
`

export const Heading = styled.h1`
  color: #ffffff;
`

export const GradientGeneratorContainer = styled.div`
  color: #ffffff;
  width: 50%;
  margin: auto;
  padding: 20px;
  height: 100%;
  text-align: center;
  background-image: linear-gradient(${props => props.gradientValue});
`

export const GradientDirectionsList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`

export const CustomInput = styled.input`
padding:10px
border-radius:5px;`

export const CustomLabel = styled.p`
  margin-bottom: 10px;
`

export const GenerateButton = styled.button`
  border-radius: 5px;
  padding: 10px 20px;
  background-color: #00c9b7;
  font-weight: bold;
  font-family: Roboto;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ColorSelectionForm = styled.form`
  padding: 10px;
`

export const ColorSelectionHeading = styled.p`
  font-family: Roboto;
`

export const DirectionHeading = styled.p`
  color: #ffffff;
`

export const InputContainer = styled.div`
  margin-bottom: 5px;
`

export const InputContainersContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
