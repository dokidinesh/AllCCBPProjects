import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {
  ComponentContainer,
  CustomButton,
  ButtonContainer,
  CustomTextArea,
  CustomListItem,
} from './styledComponents'

const TextEditor = () => (
  <ComponentContainer>
    <ButtonContainer>
      <CustomListItem>
        <CustomButton data-testid="bold">
          <VscBold size={25} />
        </CustomButton>
      </CustomListItem>
      <CustomListItem>
        <CustomButton data-testid="italic">
          <GoItalic size={25} />
        </CustomButton>
      </CustomListItem>
      <CustomListItem>
        <CustomButton data-testid="underline">
          <AiOutlineUnderline size={25} />
        </CustomButton>
      </CustomListItem>
    </ButtonContainer>
    <CustomTextArea cols="40" rows="20" />
  </ComponentContainer>
)

export default TextEditor
