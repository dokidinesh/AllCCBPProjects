// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {name, imageUrl, description} = planetDetails

  const altText = `planet ${name}`
  return (
    <div>
      <img src={imageUrl} alt={altText} className="planet-image" />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
