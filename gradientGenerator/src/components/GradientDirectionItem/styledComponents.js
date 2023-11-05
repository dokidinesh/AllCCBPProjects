// Style your elements here
import styled from 'styled-components/macro'

export const CustomButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #000fff;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  opacity: ${props => (props.active ? 1 : 0.5)};
`

export const CustomOption = styled.li`
  width: 49%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
