import './index.css'

const SongCard = props => {
  const {imageUrl, name, genre, duration, uniqueNo, deleteSong} = props

  const onDelete = () => {
    deleteSong(uniqueNo)
  }

  return (
    <li className="card-container">
      <div className="song-container">
        <img className="song-image" src={imageUrl} alt="track" />
        <div className="name-genre-container">
          <p>{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div>
        <p>{duration}</p>
        <button type="button" data-testid="delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default SongCard
