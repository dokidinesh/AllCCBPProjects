// Write your code here
import {CustomButton, CustomOption} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionItem, onClickDirectionButton, active} = props
  const {value, displayText} = gradientDirectionItem

  const onClickDirection = () => {
    onClickDirectionButton(value)
  }

  return (
    <CustomOption value={value}>
      <CustomButton onClick={onClickDirection} active={active} type="button">
        {displayText}
      </CustomButton>
    </CustomOption>
  )
}

export default GradientDirectionItem
