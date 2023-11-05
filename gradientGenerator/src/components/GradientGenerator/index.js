import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  GradientGeneratorContainer,
  ResponsiveContainer,
  Heading,
  DirectionHeading,
  GradientDirectionsList,
  ColorSelectionHeading,
  InputContainersContainer,
  InputContainer,
  CustomInput,
  GenerateButton,
  CustomLabel,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    fromColorInput: '#8ae323',
    toColorInput: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b `,
  }

  onSubmitGradientProps = event => {
    event.preventDefault()
    const {fromColorInput, toColorInput, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${fromColorInput}, ${toColorInput}`,
    })
  }

  onChangeFirstColor = event => {
    this.setState({fromColorInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({toColorInput: event.target.value})
  }

  onClickDirectionButton = direction => {
    this.setState({activeGradientDirection: direction})
  }

  render() {
    const {
      activeGradientDirection,
      fromColorInput,
      toColorInput,
      gradientValue,
    } = this.state
    return (
      <GradientGeneratorContainer
        data-testid="gradientGenerator"
        gradientValue={gradientValue}
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient </Heading>
          <DirectionHeading>Choose Direction</DirectionHeading>
          <GradientDirectionsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                gradientDirectionItem={eachDirection}
                onClickDirectionButton={this.onClickDirectionButton}
                active={activeGradientDirection === eachDirection.value}
              />
            ))}
          </GradientDirectionsList>
          <ColorSelectionHeading>Pick the Colors</ColorSelectionHeading>
          <InputContainersContainer>
            <InputContainer>
              <CustomLabel>{fromColorInput}</CustomLabel>
              <CustomInput
                type="color"
                value={fromColorInput}
                onChange={this.onChangeFirstColor}
              />
            </InputContainer>
            <InputContainer>
              <CustomLabel>{toColorInput}</CustomLabel>
              <CustomInput
                type="color"
                value={toColorInput}
                onChange={this.onChangeSecondColor}
              />
            </InputContainer>
          </InputContainersContainer>

          <GenerateButton onClick={this.onSubmitGradientProps}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </GradientGeneratorContainer>
    )
  }
}

export default GradientGenerator
