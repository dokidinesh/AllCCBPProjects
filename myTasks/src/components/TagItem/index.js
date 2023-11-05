const TagItem = props => {
  const {tagDetails, onClickTag} = props
  const {optionId, displayText} = tagDetails
  const onClickTagButton = () => {
    onClickTag(optionId)
  }
  return (
    <li id={optionId}>
      <button type="button" className="tag-tab" onClick={onClickTagButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
