const PackageCard = props => {
  const {packageDetails} = props
  const {name, imageUrl, description} = packageDetails

  return (
    <li>
      <h1>{name}</h1>
      <p>{description}</p>
      <img src={imageUrl} alt={name} />
    </li>
  )
}

export default PackageCard
