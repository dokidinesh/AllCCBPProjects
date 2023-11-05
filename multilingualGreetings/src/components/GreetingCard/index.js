import './index.css'

const GreetingCard = props => {
  const {imageAltText, imageUrl} = props

  return (
    <li className="card-container">
      <img src={imageUrl} alt={imageAltText} className="language-image" />
    </li>
  )
}

export default GreetingCard
