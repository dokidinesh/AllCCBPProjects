const ThumbnailImage = props => {
  const {imageDetails, onClickImage} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickImageButton = () => {
    onClickImage(id)
  }

  return (
    <li key={id}>
      <button type="button">
        <img
          src={thumbnailUrl}
          alt="thumbnail"
          className="thumbnail-image"
          onClick={onClickImageButton}
        />
      </button>
    </li>
  )
}

export default ThumbnailImage
